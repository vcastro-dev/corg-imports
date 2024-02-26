import Image from "next/image";
import { Container } from "../ui/Container/Container";

export function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-96">
        <Image
          src="/banner-home.webp"
          alt="Barkbusters"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Container>
        <>
          <h1 className="text-2xl font-bold text-center">A Barkbusters</h1>
          <p className="text-md text-center mt-4 text-gray-500">
            A marca de protetores de mão BARKBUSTERS® foi inicialmente fabricada
            na Austrália em 1984. Nosso entusiasmo pela pilotagem de
            motocicletas tem contribuído para o desenvolvimento dos melhores
            protetores de mão disponíveis no mercado hoje. BARKBUSTERS® é uma
            marca registrada da Rideworx Pty Ltd e é ativamente promovida em
            todo o mundo. A Rideworx é dedicada à melhoria contínua e ao
            desenvolvimento constante de sua linha de produtos, fabricando com
            os mais altos padrões possíveis. O design excepcional e a qualidade
            dos produtos fabricados pela Rideworx são amplamente reconhecidos, a
            ponto de produzirem protetores de mão para clientes OEM tanto na
            Austrália quanto internacionalmente. Na concepção de todos os
            produtos BARKBUSTERS®, a Rideworx compromete-se a incorporar estilo,
            resistência, durabilidade e facilidade de instalação. Esses
            elementos fundamentais são a base do compromisso da Rideworx em
            oferecer produtos que não apenas atendam, mas superem as
            expectativas dos motociclistas em todo o mundo.
          </p>
        </>
        <>
          <h1 className="text-2xl font-bold text-center">Nossos Produtos</h1>
        </>
      </Container>
    </div>
  );
}
