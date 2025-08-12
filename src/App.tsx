import { Route, Routes } from 'react-router-dom'

import DashboardLayout from './layouts/dashboard'
import AdsPage from './pages/ads/page'
import HomePage from './pages/home/page'
import Login from './pages/login'
import NotFound from './pages/not-found'
import ScreensPage from './pages/screens/page'
import StreamsPage from './pages/streams/page'

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<DashboardLayout />}>
        <Route element={<HomePage />} path="/dashboard" />
        <Route element={<StreamsPage />} path="/streams" />
        <Route element={<ScreensPage />} path="/screens" />
        <Route element={<AdsPage />} path="/ads" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
