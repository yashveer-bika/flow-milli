import dynamic from "next/dynamic";
const Graph = dynamic(() => import("./graph"), { ssr: false });

type Task = string;

interface OrderStatusProps {
  pickUpTime: Date;
  justFinished: Task;
  doing: Task;
  nextUp: Task;
  paused: boolean;
  progress: number;
}
export function Order({
  pickUpTime,
  justFinished,
  doing,
  nextUp,
  paused,
  progress,
}: OrderStatusProps) {
  return (
    <div className="flex flex-col border p-5 gap-5 w-full">
      <div
        className={`w-6 h-6 rounded-full ${
          paused ? "bg-yellow-400" : "bg-green-400"
        }  ${progress >= 100 ? "animate-ping" : ""} `}
      ></div>
      <div className="text-3xl">Pick up time</div>
      <div className="w-full">
        {progress >= 100 ? (
          <div className="bg-green-400 animate-ping w-full"> Now</div>
        ) : (
          pickUpTime.toLocaleString()
        )}
      </div>
      <div className="text-3xl">Just finished...</div>
      <div className="">{justFinished}</div>

      <div className="text-3xl">Doing...</div>
      <div className="">{doing}</div>

      <div className="text-3xl">Next up...</div>
      <div className="">{nextUp}</div>

      {/* TODO: make this mobile friendly */}
      <div className="w-full h-[600px]">
        <Graph />
      </div>
    </div>
  );
}
