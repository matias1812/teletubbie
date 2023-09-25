import { Container } from "postcss";
import { FC } from "react";
import { useLocation, useRoute } from "wouter";
import CardPropiedades from "../../../components/card";
import { Filters } from "../../../components/filters";
import { useFetchCards } from "../../../hooks/Customs/useFetchCards";
export type PropsDestination = {};

const Destination: FC<PropsDestination> = () => {
  const [, setLocation] = useLocation();
  const myCards = useFetchCards("active", true);

  return (
    <>
      <div className="flex justify-center">
        <Filters />
      </div>
      <span className="m-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {myCards.map((posting, index) => (
            <CardPropiedades
              autoWith
              onClick={() => setLocation(`/reservacion/${posting.id}`)}
              id={posting.id}
              titulo={posting.titulo}
              precio={posting.precio}
              localizacion={posting.ubicacion}
              imagen={posting.image}
            />
          ))}
        </div>
      </span>
    </>
  );
};

export default Destination;
