import create from 'zustand'

const useThemeStore = create((set) => ({
  theme: 'light',

  // Función para cambiar el tema
  setTheme: (newTheme) => set({ theme: newTheme })
}))

export default useThemeStore
