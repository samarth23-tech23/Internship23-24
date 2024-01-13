import { create } from "zustand";

type CoverImageStore = {
  
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
 
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false }),
  
}));