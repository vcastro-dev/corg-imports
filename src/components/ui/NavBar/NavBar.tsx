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
            <a href="/products">Productos</a>
          </li>
          <li className="mx-2">
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
