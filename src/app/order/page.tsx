import { NavLayoutShell } from "@/components/nav/NavLayoutShell";
import { Order } from "@/components/order/order";
import ProgressBar from "@/components/order/progress";

export default function Page() {
  return (
    <NavLayoutShell>
      <div className="flex min-h-screen flex-col items-center gap-8 p-8">
        <ProgressBar />
        Show all orders Have a way of searching / organizing orders
        <Order />
      </div>
    </NavLayoutShell>
  );
}
