import { create } from "zustand";
import { Episode } from "../interface/journal";

interface CardStore {
    card: Episode[];
    addItem: (item: Episode) => void;
    removeItem: (id: number) => void;
    clearItems: () => void;
}



export const useCardStore = create<CardStore>((set) => ({
  card: [],
  addItem: (item: Episode) => set((state: CardStore) => ({ card: [...state.card, item] })),
  removeItem: (id: number) => set((state: CardStore) => ({ card: state.card.filter((item: Episode) => item.id !== id) })),
  clearItems: () => set({ card: [] }),
}));

