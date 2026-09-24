import { useEffect, useState } from 'react'
import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../services/api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('teams')
      .then(setTeams)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CollectionPage
      eyebrow="Find your people"
      title="Teams"
      description="Join a crew, share the effort, and keep the leaderboard interesting."
      items={teams}
      loading={loading}
      error={error}
      emptyMessage="No teams yet. Your crew could be the first."
      renderItem={(team) => (
        <>
          <p className="item-kicker">Team</p>
          <h2>{team.name || 'Unnamed team'}</h2>
          <p>{team.members?.length ?? team.memberCount ?? 0} members</p>
        </>
      )}
    />
  )
}

export default Teams
