import { NavLayoutShell } from "@/components/nav/NavLayoutShell";

export default function Home() {
  return (
    <NavLayoutShell>
      <main className="flex min-h-screen flex-col items-center gap-8 p-8 max-w-[1028px]">
        <div className="text-3xl w-full">Idea</div>
        <p className="w-full">
          Inspired by Hadrian&apos;s factory OS, Flow. I seems like an ERP
          software that is not garbage. Let&apos;s try to build abstractions and
          tools for general use in operations.
        </p>

        <div className="text-2xl w-full">Problem structure</div>
        <div className="w-full">
          Let&apos;s focus on 1 simple model. We have a singular order for our
          factory. Assume we already split the order into it&apos;s
          subcomponents and steps. How do we nicely visualize the processes that
          are building that order?
        </div>

        <div className="text-2xl w-full">Assumptions</div>
        <ul className="list-disc w-full px-5">
          <li>Only handle 1 order at a time</li>
          <li>
            Our order splitting can be represented as a DAG (directed acyclic
            graph)
          </li>
          <li>
            A graph node represents an intermediate product. For birthday cake,
            example intermediates are sprinkles and frosting.
          </li>
          <li>
            A graph edge represents an dependency. A connection from source A to
            target B means target B depends on source A&apos;s availability.
          </li>
        </ul>

        <div className="text-2xl w-full">TODOs</div>
        <ul className="list-disc w-full px-5">
          <li>
            Connect progress simulation with operations in graph. You see
            coloring associating with currently running tasks on the graph.
          </li>
          <li>
            Context menu on graph nodes. See sub-process details, time to
            finish, dependent steps.
          </li>
          <li>Allow users to configure their own operational graphs</li>
        </ul>
      </main>
    </NavLayoutShell>
  );
}
