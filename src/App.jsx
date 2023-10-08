import { Navigate, Route, Routes } from 'react-router-dom'

import DetailPage from './pages/Detail'
import Main from "./pages/Main"
import SearchPage from './pages/Search'
import SettingsPage from "./pages/Setting"
import Splash from "./pages/Splash"
import TipsPage from './pages/Tips'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tips" element={<TipsPage />} />

      <Route path="/detail/:id" element={<DetailPage />} />

      <Route path="/splash" element={<Splash />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
