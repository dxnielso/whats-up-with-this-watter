import { Navigate, Route, Routes } from 'react-router-dom'

import DetailPage from './pages/Detail'
import Main from "./pages/Main"
import SearchPage from './pages/Search'

import SettingsPage from "./pages/Setting"
import LanguageSettingsPage from './pages/Settings/Language'
import ThemeSettingsPage from './pages/Settings/Theme'

import Splash from "./pages/Splash"

import TipsPage from './pages/Tips'
import AnimalDetailPage from './pages/AnimalDetail'

import PetPage from './pages/Pet'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/pet" element={<PetPage />} />

      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/settings/language" element={<LanguageSettingsPage />} />
      <Route path="/settings/theme" element={<ThemeSettingsPage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/tips" element={<TipsPage />} />

      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/animal/:id" element={<AnimalDetailPage />} />

      <Route path="/splash" element={<Splash />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
