import { useEffect, useState } from 'react'
import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../services/api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities')
      .then(setActivities)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CollectionPage
      eyebrow="Movement log"
      title="Activities"
      description="A clear record of every session that moves you forward."
      items={activities}
      loading={loading}
      error={error}
      emptyMessage="No activities yet. Your next session can start the list."
      renderItem={(activity) => (
        <>
          <p className="item-kicker">{activity.type || activity.activity_type || 'Activity'}</p>
          <h2>{activity.name || activity.title || 'Logged session'}</h2>
          <p>{activity.duration ? `${activity.duration} minutes` : 'Duration not recorded'}</p>
        </>
      )}
    />
  )
}

export default Activities
