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

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // To keep track of the interval

  const [progressJump, setProgressJump] = useState(1.0); // Initial interval time: 1000ms = 1 second

  const increaseSpeed = () => {
    stopInterval();
    // clearInterval(intervalId as NodeJS.Timeout);

    setProgressJump((prevProgJump) =>
      prevProgJump >= 100 ? prevProgJump : prevProgJump + 0.5
    );
    startInterval();
  };

  const decreaseSpeed = () => {
    stopInterval();
    // clearInterval(intervalId as NodeJS.Timeout);
    setProgressJump((prevProgJump) =>
      prevProgJump >= 100 ? prevProgJump : prevProgJump - 0.5
    );

    startInterval();
  };

  const startInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => prevProgress + progressJump);
        } else {
          clearInterval(id);
          setIntervalId(null);
        }
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopInterval = () => {
    clearInterval(intervalId as NodeJS.Timeout);
    setIntervalId(null);
  };

  const resetProgressBar = () => {
    stopInterval();
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  console.log(`progress: ${progress}`);
  console.log(`progressJump: ${progressJump}`);

  const formatNumber = (number: number) => {
    // Round the number to two decimal places and convert it to a string
    const formattedNumber = number.toFixed(2).toString();
    // Add thousands separators if needed
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
    </div>
  );
}
