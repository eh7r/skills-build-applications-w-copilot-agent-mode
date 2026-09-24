import { NavLink, Outlet } from 'react-router-dom'

function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">OCTOFIT<span>/</span></NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/teams">Teams</NavLink>
        </nav>
        <button className="profile-button" type="button" aria-label="Open profile">PM</button>
      </header>
      <Outlet />
    </div>
  )
}

export default AppShell
