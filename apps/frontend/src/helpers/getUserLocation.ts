export const getUserLocation = async (): Promise<[number, number]> => {
	//Promise representa un resultado eventual de una operacion async
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			//Si todo sale bien voy a tener un objeto de tipo position
			({ coords }) => {
				resolve([coords.longitude, coords.latitude]); //Its successful
			},
			//Si sale mal tendre un error
			(err) => {
				alert("Nos se pudo obtener la Geolocation");
				console.log(err);
				reject(); //Diciendo que nuestro getUserLocation it doesnt successful
			},
		);
	});
};
