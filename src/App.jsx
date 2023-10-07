import { Navigate, Route, Routes } from 'react-router-dom'

import Main from "./pages/Main"
import SettingsPage from "./pages/Setting"
import Splash from "./pages/Splash"
import SearchPage from './pages/Search'
import TipsPage from './pages/Tips'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tips" element={<TipsPage />} />

      <Route path="/splash" element={<Splash />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
