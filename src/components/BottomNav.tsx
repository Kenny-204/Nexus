"use client";
import { Home, Search, MessageSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full lg:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md">
      <ul className="flex justify-around">
        {navItems.map(({ href, label, icon: Icon }) => {
       
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className="relative flex flex-col items-center justify-center p-3 text-gray-500"
              >
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-blue-50"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`z-10 ${active ? "text-blue-600" : "text-gray-500"}`}
                />
                <p
                  className={`text-xs mt-1 z-10 ${active ? "text-blue-600 font-medium" : "text-gray-500"
                    }`}
                >
                  {label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

