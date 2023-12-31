"use client";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  Code,
  Pill,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-blue-500",
  },
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-red-700",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Lawyer",
    icon: Code,
    href: "/lawyer",
    color: "text-blue-700",
  },
  {
    label: "Doctor",
    icon: Pill,
    href: "/doctor",
    color: "text-teal-700",
  },
];

interface SidebarProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsOpen }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col space-y-4 bg-gray-800 py-14 text-white md:py-4">
      <div className="px-3 py-2">
        <Link href="/">
          <div className="text-2xl font-bold">AI Tools</div>
        </Link>
      </div>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            onClick={() => setIsOpen!(false)}
            className={clsx(
              "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
              pathname === route.href ? "bg-white/10" : "text-zinc-400",
            )}
          >
            <div className="item-center flex flex-1">
              <route.icon className={clsx("mr-3 h-5 w-5", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
