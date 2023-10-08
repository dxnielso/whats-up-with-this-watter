import create from 'zustand';

const useLanguageStore = create((set) => ({
  language: 'es', // Idioma por defecto

  // Función para cambiar el idioma
  setLanguage: (newLanguage) => set({ language: newLanguage }),
}));

export default useLanguageStore;
