import Image from "next/image";
import { Container } from "../Container/Container";
import { NavBar } from "../NavBar/NavBar";

export function Header() {
  return (
    <header className="shadow-md w-full bg-white py-2">
      <Container>
        <div className="flex items-center justify-between">
          <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
