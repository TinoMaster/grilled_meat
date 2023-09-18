import Image from "next/image";
import { img_parrilla } from "@/utils/images";

export default function Home() {
  return (
    <>
      <header>
        <section className="w-full h-[80vh] relative">
          <div className="absolute w-full h-full bg-gradient-to-t from-black/40 to-black/60"></div>
          <Image className="w-full h-full object-cover" src={img_parrilla} alt="prueba" />
        </section>
      </header>
      <main></main>
    </>
  );
}
