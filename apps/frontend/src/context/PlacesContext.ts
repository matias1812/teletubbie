import { createContext } from "react";

export interface PlaceContextProps {
    isLoading: boolean;
    userLocation?: [number, number]
}



export const PlaceContext = createContext<PlaceContextProps>({} as PlaceContextProps); //El context muestra a los demas componentes