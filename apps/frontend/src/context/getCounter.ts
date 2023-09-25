import create from "zustand";

type HuespedesStore = {
	counter: number[];
	incrementCounter: (index: number) => void;
	decrementCounter: (index: number) => void;
};

export const useHuespedesStore = create<HuespedesStore>((set) => ({
	counter: [0],
	incrementCounter: (index: number) => {
		set((state) => {
			const updatedCounter = [...state.counter];
			updatedCounter[index] += 1;
			return { counter: updatedCounter };
		});
	},
	decrementCounter: (index: number) => {
		set((state) => {
			if (state.counter[index] > 0) {
				const updatedCounter = [...state.counter];
				updatedCounter[index] -= 1;
				return { counter: updatedCounter };
			}
			return state;
		});
	},
}));
