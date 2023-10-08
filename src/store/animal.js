import create from 'zustand';

const useAnimalStore = create((set) => ({
  animal: 'microscopico', // Idioma por defecto

  // Función para cambiar el idioma
  setAnimal: (newAnimal) => set({ animal: newAnimal }),
}));

export default useAnimalStore;
