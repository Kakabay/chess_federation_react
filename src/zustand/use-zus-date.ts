import { create } from 'zustand';

interface Store {
  date: Date;
  setDate: (value: Date) => void;
}

export const useZusDate = create<Store>((set) => ({
  date: new Date(),

  setDate: (value) => set((state) => ({ date: (state.date = value) })),
}));
