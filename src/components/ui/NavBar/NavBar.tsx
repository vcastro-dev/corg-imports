import { Container } from "../Container/Container";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full p-4">
      <Container>
        <ul className="flex">
          <li className="mx-2">
            <a href="/">Home</a>
          </li>
          <li className="mx-2">
            <a href="/products">Produtos</a>
          </li>
          <li className="mx-2">
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
