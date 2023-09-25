import { Avatar } from "@nextui-org/react";
import "swiper/css";
import { SwiperHome } from "../components/Carrusel/SwiperHome";
import { Filters } from "../components/filters";
import logo from "../img/icono00.png";

export function Home() {
  return (
    <span className="grid gap-24 ">
      <section className="mt-10 flex flex-col items-center justify-center ">
        <div className="flex flex-row items-center justify-center ">
          <div className="flex flex-col h-full">
            <h1 className="ml-[7rem] mb-8 mt-16 max-w-xl text-6xl font-semibold animate-fade-right animate-once dark:text-white">
              <span className="text-primary">Descubre</span> un nuevo mundo 🌎
              <br /> A tu manera.
            </h1>
            <section className="max-w-xl mb-10">
              <p className="ml-[7rem] animate-fade-right animate-once dark:text-white text-lg">
                Start up de arriendo de distintos inmoviliarios en los que se
                encuentran: <br />
                casas, cabaña, departamentos, hoteles, etc. los cuales cuentan
                con calificacion hasta 5⭐️
              </p>
            </section>
          </div>
          <div className="flex flex-col">
            <img
              className="max-w-[30rem] mt-[-2rem] animate-fade-left animate-once"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <Filters />
      </section>
      <section>
        <div className="flex flex-col  items-center gap-10">
          <h1 className="text-primary font-bold text-4xl">
            Ofertas y descuentos
          </h1>
          <p className="max-w-md text-center">
            Descubre nuestros fantásticos descuentos por reserva anticipada y
            empieza a planificar tu viaje
          </p>
          <SwiperHome />
        </div>
      </section>
      <section className="flex flex-col  items-center gap-10">
        <h1 className=" text-center font-bold text-4xl max-w-md ">
          Esto es lo{" "}
          <span className="text-primary">que dicen nuestros clientes</span>
        </h1>
        <div className="grid grid-cols-3 gap-16 w-2/3">
          <div className="flex flex-col gap-12">
            <div>
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="lg"
              />
            </div>
            <div className="flex flex-row-reverse">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="md"
              />
            </div>
            <div className="flex justify-center">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-16 h-16 text-large"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-20 h-20 text-large"
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row-reverse">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="lg"
              />
            </div>
            <div className="flex justify-center mr-10">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-16 h-16 text-large"
              />
            </div>
            <div className="flex justify-center ml-16">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>
    </span>
  );
}
