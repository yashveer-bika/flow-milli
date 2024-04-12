import { NavLayoutShell } from "@/components/nav/NavLayoutShell";

export default function Home() {
  return (
    <NavLayoutShell>
      <main className="flex min-h-screen flex-col items-center gap-8 p-8">
        Let's try to abstract some key pieces from factory operations:
        - Assume we only handle 1 order at a time. Yes I know this is a bold assumption.
        - Each order has multiple parts
        - Each part is made of multiple inventory items
        

        - Inventory items came together to make parts
        - Parts come together to make an order
        - So we have a lot of dependencies. 
        - In order for a part to be made, all the associated inventory items need to be processed accordingly.
        - Let's visualize our data structure
        - We have a DAG where the first nodes on the left-most part are all raw inventory items
        - Our graph progresses to the right side, meaning raw materials are converted into sub-parts then parts, then parts are assembled step-by-step into a complete order.
        - Nodes represent an action that uses all incoming edges. 
        - edges represent a material dependency (target depends on source node)
        - Let's keep our model simple and say their is only a material dependency.
        - Assume unlimited machinery, man-power, and infinite transportation speed.
        - Cool. Let's write up a data structure.


        
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
