import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface StoreState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

const useBearStore = create<StoreState>()(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 2})),
  removeAllBears: () => set({bears: 0}),
  updateBears: newBears => set({bears: newBears}),
}));

export default useBearStore;
