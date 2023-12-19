"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center p-4">
      <button
        className="z-50 block  md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Menu className={isOpen ? "text-white" : "text-black"} />
      </button>
      <div
        className={cn(
          `bottom-0 left-0 h-full w-1/2 md:hidden`,
          isOpen && "absolute",
        )}
      >
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};
export default Navbar;
