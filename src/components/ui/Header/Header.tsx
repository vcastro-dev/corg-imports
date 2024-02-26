import { Container } from "../Container/Container";
import { NavBar } from "../NavBar/NavBar";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center w-full gap-4 p-4">
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
