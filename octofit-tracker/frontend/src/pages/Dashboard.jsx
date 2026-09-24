import StatCard from '../components/StatCard.jsx'

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="intro-panel">
        <p className="eyebrow">Your movement, in motion</p>
        <h1>Make today count.</h1>
        <p>Log a workout, keep your streak alive, and see how your team is moving.</p>
        <button type="button" className="primary-button">Log an activity</button>
      </section>
      <section className="stats-grid" aria-label="Your progress">
        <StatCard label="This week" value="0 min" detail="Start with a short session" />
        <StatCard label="Points" value="0" detail="Earn points as you move" />
        <StatCard label="Team rank" value="--" detail="Join a team to compete" />
      </section>
      <section className="empty-state">
        <p className="eyebrow">Recommended for you</p>
        <h2>Your next good choice is ready.</h2>
        <p>Personalized workouts will appear here after you log your first activity.</p>
      </section>
    </main>
  )
}

export default Dashboard
