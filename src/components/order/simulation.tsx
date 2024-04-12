"use client";
import { useState } from "react";
import { Order } from "./order";
import ProgressBar from "./progress";

// TODO: make a bunch of events that happen based on and prereqs
// a big DAG to represent event dependencies
const events = [
  
]

export function Simulation() {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(true);

  

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 p-8 w-full max-w-[1028px]">
      <ProgressBar
        progress={progress}
        setProgress={setProgress}
        setPaused={setPaused}
      />
      <Order
        paused={paused}
        progress={progress}
        pickUpTime={new Date()}
        justFinished={"Order details collected"}
        doing={"Converting order specifications into machine code"}
        nextUp={"Have {Employee from Pool A} verify generated code"}
      />
    </div>
  );
}
