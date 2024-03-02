import Link from "next/link";

const DefaultHeader: React.FC = () => {
  return (
    <header className="px-2 py-8 flex items-center justify-around">
      <h1 className="uppercase">Freddy Broker</h1>

      <nav>
        <ul className="flex items-center justify-around gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button>Login</button>
    </header>
  );
};

export default DefaultHeader;
