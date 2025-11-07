import Link from "next/link";
export default function TopNav() {
  return (
    <nav className="max-lg:hidden lg:flex justify-between p-3 border-b-gray-200 border-b ">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Search</Link>
          </li>
          <li>
            <Link href="#">Messages</Link>
          </li>
          <li>
            <Link href="#">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
