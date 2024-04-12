"use client";
import { Progress } from "@/components/ui/progress";
import {
  PauseIcon,
  PlayIcon,
  ResetIcon,
  SpeakerLoudIcon,
  SpeakerQuietIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  progress: number;
  setProgress: (value: React.SetStateAction<number>) => void;
  setPaused: (value: React.SetStateAction<boolean>) => void;
}

export default function ProgressBar({
  progress,
  setProgress,
  setPaused,
}: ProgressBarProps) {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const [progressJump, setProgressJump] = useState(1.0);

  const increaseSpeed = () => {
    stopInterval();

    setProgressJump((prevProgJump) =>
      prevProgJump >= 100 ? prevProgJump : prevProgJump + 0.5
    );
  };

  const decreaseSpeed = () => {
    stopInterval();
    setProgressJump((prevProgJump) =>
      prevProgJump >= 100 ? prevProgJump : prevProgJump - 0.5
    );
  };

  const startInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => {
            const newV = prevProgress + progressJump;

            if (newV >= 100) {
              setPaused(false);
              return 100;
            } else {
              return newV;
            }
          });
          setPaused(false);
        } else {
          stopInterval();
        }
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopInterval = () => {
    clearInterval(intervalId as NodeJS.Timeout);
    setIntervalId(null);
    if (progress < 100) {
      setPaused(true);
    }
  };

  const resetProgressBar = () => {
    stopInterval();
    setProgress(0);
    setPaused(true);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const formatNumber = (number: number) => {
    const formattedNumber = number.toFixed(2).toString();
    return formattedNumber.toLocaleString();
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div>{`${formatNumber(progress)}% complete`}</div>
      <Progress value={progress} />
      <div className="flex gap-5 p-3 border justify-between">
        <PauseIcon
          className="h-10 w-10 hover:text-black hover:bg-white p-2"
          onClick={stopInterval}
        />
        <PlayIcon
          className="h-10 w-10 hover:text-black hover:bg-white p-2"
          onClick={startInterval}
        />
        <SpeakerQuietIcon
          className="h-10 w-10 hover:text-black hover:bg-white p-2"
          onClick={decreaseSpeed}
        />
        <SpeakerLoudIcon
          className="h-10 w-10 hover:text-black hover:bg-white p-2"
          onClick={increaseSpeed}
        />
        <ResetIcon
          className="h-10 w-10 hover:text-black hover:bg-white p-2"
          onClick={resetProgressBar}
        />
      </div>
      <div>{`${formatNumber(progressJump)}% progress per second speed`}</div>
    </div>
  );
}
