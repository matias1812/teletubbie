import { useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { supabaseClient } from "../../supabase";

export interface Reservation {
  fecha_inicio: string;
  fecha_final: string;
  fecha_compra: string;
  huespedes: string;
  valor_compra: string;
  publicacion: Publicacion;
}

export interface Publicacion {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  image: string;
  ubicacion: string;
}

export const useFetchReservation = () => {
  const [userReservation, setUserReservation] = useState<Reservation[]>([]);
  const { user } = AuthContext();

  useEffect(() => {
    async function fetchIdUser() {
      const { data: mis_reservaciones, error } = await supabaseClient
        .from("mis_reservaciones")
        .select(
          `
				fecha_inicio,
				fecha_final,
				fecha_compra,
				huespedes,
				valor_compra,
				publicacion ( 
					id,
          titulo,
          descripcion,
          precio,
          image,
					ubicacion
				)
				`
        )
        .eq("user_id", user?.user.id!);
      if (mis_reservaciones) {
        setUserReservation(mis_reservaciones as unknown as Reservation[]);
      }

      console.log(error);
    }

    fetchIdUser();
  }, [user]);

  return userReservation;
};
