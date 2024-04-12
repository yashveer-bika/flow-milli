import { NavLayoutShell } from "@/components/nav/NavLayoutShell";

export default function Home() {
  return (
    <NavLayoutShell>
      <main className="flex min-h-screen flex-col items-center gap-8 p-8">
        We have some things to organize:
        <ul>
          <li>Order status (for buyers)</li>
          <li>Jobs</li>
          <li>People</li>
          <li>Machines</li>
          <li>Project status</li>
          <li>Schedule and coordinate people</li>
          <li>Orders</li>
          <li>Hardware data integrations</li>
          <li>Quality inspection processes</li>
        </ul>
      </main>
    </NavLayoutShell>
  );
}
