import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";

interface TypesState {
	id: string;
	publicacion: string[];
}

interface TypesCard {
	id: string;
	cardParams: string[];
}

export const useFetchId = (id: string) => {
	const [myCard, setMyCard] = useState<string[] | TypesState>([]);

	useEffect(() => {
		async function fetchCard(cardParams: TypesCard[]) {
			const { data: publicacion } = await supabaseClient
				.from("publicacion")
				.select("*")
				.eq("id", id);

			if (publicacion) {
				const data = publicacion.map(({ prestaciones, ...item }) => {
					return {
						...item,
						id: item.id,
						publicacion: prestaciones?.map((params: string) => {
							return cardParams.find(
								(subCardId) => subCardId.id === params,
							)?.benefit as string[];
						}),
					};
				});

				setMyCard(data[0] as any);
				console.log(data);
			}
		}
		async function fetchPrestaciones() {
			const { data } = await supabaseClient.from("benefits").select("*");

			fetchCard(data as any[]);
		}

		(async () => {
			await fetchPrestaciones();
		})();
	}, [id]);

	return myCard;
};
