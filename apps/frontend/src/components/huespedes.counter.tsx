import { Button } from "@nextui-org/react";
import { useHuespedesStore } from "../context/getCounter";

export default function Huespedes() {
	const { counter, incrementCounter, decrementCounter } = useHuespedesStore();

	return (
		<div className="m-2 w-39">
			<span>Huespedes: </span>
			<Button
				className="pointer-events-auto cursor-pointer"
				onClick={() => {
					decrementCounter(0);
				}}
				style={{ margin: "0 4px" }}
			>
				-
			</Button>
			<span className="m-2">{counter[0]}</span>
			<Button
				className="pointer-events-auto cursor-pointer"
				onClick={() => {
					incrementCounter(0);
				}}
				style={{ margin: "0 4px" }}
			>
				+
			</Button>
		</div>
	);
}
