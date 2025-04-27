import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {createSelectors} from '../utils/createSelectors';

type TCatStoreState = {
  cats: {
    bigCat: number;
    smallCat: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => string;
};

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer((set, get) => ({
      cats: {
        bigCat: 0,
        smallCat: 0,
      },
      increaseBigCats: () =>
        set(state => {
          state.cats.bigCat += 1; // when we use immer the we not neet to return new object to state
        }),
      increaseSmallCats: () =>
        set(state => {
          state.cats.smallCat += 2;
        }),
      summary: () => {
        const totalCat = get().cats.bigCat + get().cats.smallCat;
        return `there are ${totalCat} in total`;
      },
    })),
  ),
);
// set(state => ({
//     cats: {
//       ...state.cats,
//       smallCat: (state.cats.smallCat += 1),
//     },
//   })
