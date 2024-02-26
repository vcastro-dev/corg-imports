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
            <a href="/products">Products</a>
          </li>
          <li className="mx-2">
            <a href="/about">About</a>
          </li>
          <li className="mx-2">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
