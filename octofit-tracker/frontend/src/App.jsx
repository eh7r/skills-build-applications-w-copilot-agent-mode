import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="activities" element={<PlaceholderPage title="Activities" description="Your logged movement will live here." />} />
          <Route path="teams" element={<PlaceholderPage title="Teams" description="Find your people and climb the leaderboard together." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
