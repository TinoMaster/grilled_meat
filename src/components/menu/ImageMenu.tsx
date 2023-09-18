import React from "react";
import Image from "next/image";
import { img_Menu } from "@/utils/images";

export const ImageMenu = () => {
  return (
    <section className="w-full h-[60vh] relative">
      <div className="absolute w-full h-full bg-gradient-to-t from-black/40 to-black/60"></div>
      <Image
        className="w-full h-full object-cover"
        src={img_Menu}
        alt="prueba"
      />
    </section>
  );
};
