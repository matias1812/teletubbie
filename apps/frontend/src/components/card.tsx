import { Card, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";
import { IconCurrentLocation } from "@tabler/icons-react";
import { HtmlHTMLAttributes } from "react";
import { imageURL } from "../supabase";

type CardPropiedades = HtmlHTMLAttributes<HTMLElement> & {
  etiqueta?: string;
  precio?: string | number;
  localizacion?: string;
  imagen?: string;
  titulo?: string;
  descuento?: string | number;
  autoWith?: boolean;
};

export default function Cards({
  onClick,
  autoWith,
  ...props
}: CardPropiedades) {
  console.log("props", `${imageURL}${props.imagen}`);

  return (
    <>
      <Card
        isFooterBlurred
        className={`h-[300px]  pointer-events-auto ${
          !autoWith && "w-64 h-[300px]"
        }`}
      >
        <CardHeader
          className="absolute z-10 top-1 flex-col items-start"
          onClick={onClick}
        >
          <Chip color="primary" variant="shadow">
            {props.etiqueta ?? "New"}
          </Chip>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={
            props.imagen
              ? `${imageURL}${props.imagen}`
              : "https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
          }
          onClick={onClick}
        />
        <CardFooter
          onClick={onClick}
          className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between"
        >
          <div>
            <p className="text-black font-semibold overflow-clip">
              {props.titulo ?? "Casa, Colombia, Medellin"}
            </p>
            <p className="text-black text-tiny gap-2 flex items-center">
              <IconCurrentLocation />
              {props.localizacion ?? "Medellin"}
            </p>
          </div>
          <div className=" flex flex-col items-center">
            {props.descuento && (
              <span className="line-through">$ {props.descuento ?? 1500}</span>
            )}
            <Chip color="primary" variant="shadow">
              $<span className="px-1">{props.precio ?? 999}</span>
            </Chip>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
