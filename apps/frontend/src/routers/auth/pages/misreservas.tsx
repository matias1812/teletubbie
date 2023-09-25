import { Divider } from "@nextui-org/react";
import CardPropiedades from "../../../components/card";
import { useFetchReservation } from "../../../hooks/Customs/useFetchReservation";

export function MisReservas() {
  const reservations = useFetchReservation();

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl mt-[2rem]">Mis Reservaciones</h1>
        <Divider className="mb-[2rem]" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-10">
          {reservations.map((reservation, index) => (
            <CardPropiedades
              key={reservation.publicacion.id}
              id={reservation.publicacion.id}
              titulo={reservation.publicacion.titulo}
              precio={reservation.valor_compra}
              localizacion={`${reservation.publicacion.ubicacion}-${reservation.fecha_inicio}-${reservation.fecha_final}`}
              imagen={reservation.publicacion.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
