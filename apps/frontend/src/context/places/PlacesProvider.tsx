import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlaceContext } from "../PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlacesState {
	//Solo me define como quiero que luzca ese objeto de PlacesState
	isLoading: boolean;
	userLocation?: [number, number];
}

const INITAL_STATE: PlacesState = {
	//Estado es la informacion que almacenamos en memoria
	isLoading: true, //Porque cuando carga la aplicación inmediatante loading para saber la ubicacion de la persona
	userLocation: undefined,
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(placesReducer, INITAL_STATE); //Estado inicial,

	useEffect(() => {
		//Obtener la geolocalizacion de la persona
		getUserLocation().then((LngLat) =>
			dispatch({ type: "setUserLocation", payload: LngLat }),
		); //Promise, en el then las coords
	}, []);
	//Entonces cuando se manda a hacer el dispatch de esa action, viene al reducer, confirma si es correcto sino throw error

	return (
		<PlaceContext.Provider
			value={{
				...state, //Esparciento todo el state (INITIAL_STATE) y tomar facilmente la informacion de nuestro Providder
			}}
		>
			{children}
		</PlaceContext.Provider>
	);
};
