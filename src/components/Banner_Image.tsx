import Image from "next/image";

interface image {
  src: string;
  width: number;
  height: number;
}

export const Banner_Image = ({
  image,
  tittle,
  bigTittle,
}: {
  image: image;
  tittle: string;
  bigTittle: string;
}) => {
  return (
    <section className="w-full h-[70vh] relative">
      <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50">
        <div className="flex flex-col gap-2 text-white w-11/12 md:w-1/3 h-5/6 justify-center">
          <p className="text-slate-300 text-xs md:text-base">{tittle}</p>
          <p className="text-3xl md:text-5xl">{bigTittle}</p>
          <div className="">
            <button className="bg-secondary shadow-lg shadow-black/40 text-lg p-2 rounded">
              Probando
            </button>
          </div>
        </div>
      </div>
      <Image
        width={image.width}
        height={image.height}
        className="w-full h-full object-cover"
        src={image.src}
        alt="prueba"
      />
    </section>
  );
};
