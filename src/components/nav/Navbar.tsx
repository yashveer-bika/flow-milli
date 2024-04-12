"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { url: "/", name: "Home" },
  { url: "/order", name: "Orders" },
  // { url: "/projects", name: "Projects" },
  // {
  //   url: "/people",
  //   name: "People",
  // },
  // {
  //   url: "/machines",
  //   name: "Machine",
  // },
  // {
  //   url: "/guestbook",
  //   name: "Guestbook",
  // },
  // {
  //   url: "/blog",
  //   name: "Blog",
  // },
  // {
  //   url: "/thank-you",
  //   name: "Thank you...",
  // },
];

function NavLinks() {
  return (
    <div className="">
      <div className="flex gap-4">
        {navlinks.map((nav) => (
          <Link key={nav.name} href={nav.url}>
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ChangeDirBlock() {
  // TODO: make this a complete idea. Have it look like a Terminal, implement basic commands, (ls, cd)
  const pathname = usePathname();
  return <div className="font-bold text-xl">cd {pathname}</div>;
}

export function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-8 lg:p-16 w-full z-50">
      <ChangeDirBlock />
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
