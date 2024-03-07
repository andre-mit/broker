import Link from "next/link";
import Container from "@/components/ui/container";

const DefaultHeader: React.FC = () => {
  return (
    <Container className="border-b border-gray-800 dark:border-gray-300">
      <header className="px-12 py-8 flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="uppercase">Freddy Broker</h1>
        </Link>

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
    </Container>
  );
};

export default DefaultHeader;
