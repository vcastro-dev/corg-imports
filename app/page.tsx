import { Container } from "@/src/components/Container/Container";
import { Header } from "@/src/components/Header/Header";
import { Nav } from "@/src/components/Nav/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Nav />
      <Container>
        <h1 className="text-4xl font-bold text-center">Home</h1>
      </Container>
    </main>
  );
}
