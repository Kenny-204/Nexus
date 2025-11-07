import { Home, Search, MessageSquare, User } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full lg:hidden border-t border-t-gray-300">
      <ul className="flex justify-around">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-3"
          >
            <Home size={15} />
            <p className="text-sm">Home</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-3"
          >
            <Search size={15} />
            <p className="text-sm">Search</p>
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-3"
          >
            <MessageSquare size={15} />
            <p className="text-sm">Messages</p>
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center p-3"
          >
            <User size={15} />
            <p className="text-sm">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
