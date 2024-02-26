import Link from "next/link";
import { Container } from "../Container/Container";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4">
      <Container>
        <div className="flex">
          <Link
            className="mx-2 hover:bg-gray-200 rounded-md px-3 py-2"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 hover:bg-gray-200 rounded-md px-3 py-2"
            href="/products"
          >
            Produtos
          </Link>
          <Link
            className="mx-2 hover:bg-gray-200 rounded-md px-3 py-2"
            href="/faq"
          >
            Perguntas frequentes
          </Link>
          <Link
            className="mx-2 hover:bg-gray-200 rounded-md px-3 py-2"
            href="/contact"
            passHref
          >
            Contato
          </Link>
        </div>
      </Container>
    </nav>
  );
}
