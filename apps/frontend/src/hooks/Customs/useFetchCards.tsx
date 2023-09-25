import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";

export interface TypeState {
  id: string | undefined;
  titulo: string | undefined;
  precio: number | undefined;
  localizacion: string | undefined;
  image: string | undefined;
  imagen: string | undefined;
  benefits: string[];
}

export interface TypesBenefits {
  id: string;
  benefits: string[];
}

export const useFetchCards = (name: string, condition: boolean) => {
  const [myCards, setMyCards] = useState<TypeState[]>([]);

  useEffect(() => {
    async function fetchCard(
      benefitsPromise: Promise<{ data: TypesBenefits[] }>
    ) {
      const { data: publicacion } = await supabaseClient
        .from("publicacion")
        .select("*")
        .eq(name, condition);

      if (publicacion) {
        const { data: benefits } = await benefitsPromise;

        const data = publicacion.map(({ prestaciones, ...item }) => {
          return {
            ...item,
            id: item.id,
            publicacion: prestaciones?.map((prestacion: string) => {
              return benefits.find((benefitsub) => benefitsub.id === prestacion)
                ?.benefits;
            }),
          };
        });

        setMyCards(data as any[]);
      }
    }
    async function fetchPrestaciones() {
      const data = supabaseClient.from("benefits").select("*");

      fetchCard(data as any);
    }

    fetchPrestaciones();
  }, []);

  return myCards;
};
