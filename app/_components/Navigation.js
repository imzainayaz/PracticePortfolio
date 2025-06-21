import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-16 items-center justify-center text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
