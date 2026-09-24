import { useEffect, useState } from 'react'
import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../services/api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('workouts')
      .then(setWorkouts)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CollectionPage
      eyebrow="Build your next session"
      title="Workouts"
      description="Choose a focused session that fits the energy you have today."
      items={workouts}
      loading={loading}
      error={error}
      emptyMessage="Workout suggestions will appear here soon."
      renderItem={(workout) => (
        <>
          <p className="item-kicker">{workout.type || 'Workout'}</p>
          <h2>{workout.name || workout.title || 'Suggested session'}</h2>
          <p>{workout.duration ? `${workout.duration} minutes` : 'Flexible duration'}</p>
        </>
      )}
    />
  )
}

export default Workouts
