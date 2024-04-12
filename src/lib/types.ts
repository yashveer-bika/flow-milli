interface Process {}

enum PartStatus {
  NotStarted = "NOTSTARTED",
  Moving = "MOVING",
  Blocked = "BLOCKED",
  Finished = "FINISHED",
}

interface Part {
  status: PartStatus;
  steps: Process[];
}

interface Order {
  parts: Part[];
}

export interface FactoryState {
  parts: Part[];
  // assume orders are listed in order of priority
  orders: Order[];
}
