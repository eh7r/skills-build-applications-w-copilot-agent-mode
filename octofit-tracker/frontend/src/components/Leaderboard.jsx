import { useEffect, useState } from 'react'
import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../services/api.js'

function Leaderboard() {
  const [leaders, setLeaders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
    fetchCollection('leaderboard')
      .then(setLeaders)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CollectionPage
      eyebrow="Friendly competition"
      title="Leaderboard"
      description="See how your team is moving and find your next bit of momentum."
      items={leaders}
      loading={loading}
      error={error}
      emptyMessage="The leaderboard is waiting for its first scores."
      renderItem={(leader, index) => (
        <>
          <p className="item-kicker">Rank {index + 1}</p>
          <h2>{leader.name || leader.username || 'Athlete'}</h2>
          <p>{leader.points ?? leader.score ?? 0} points</p>
        </>
      )}
    />
  )
}

export default Leaderboard
