import { PlacesState } from "./PlacesProvider";

type PlacesAction = { type: "setUserLocation"; payload: [number, number] }; //Acciones, primero latitud y despues longitud por eso es number number
//Cuando yo reciba una accion de tipo userlocation tendre la latitud y longitud

export const placesReducer = (
  state: PlacesState,
  action: PlacesAction
): PlacesState => {
  //Va regresar un objeto del mismo tipo del estado y tambien las acciones, estan determinan el nuevo estado

  //Reducer
  switch (action.type) {
    case "setUserLocation": //Solo vamos a tener algo de este tipo
      return {
        ...state, //Copia del state, todas sus propiedades son las mismas esparciendo para crear un nuevo estado
        isLoading: false,
        userLocation: action.payload, //number, number
      };

    default:
      return state;
  }
};
