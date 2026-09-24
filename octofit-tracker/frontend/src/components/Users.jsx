import { useEffect, useState } from 'react'
import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../services/api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('users')
      .then(setUsers)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <CollectionPage
      eyebrow="Your community"
      title="Users"
      description="Meet the people turning small habits into lasting progress."
      items={users}
      loading={loading}
      error={error}
      emptyMessage="No profiles are available yet."
      renderItem={(user) => (
        <>
          <p className="item-kicker">Member</p>
          <h2>{user.name || user.username || 'Octofit member'}</h2>
          <p>{user.email || 'Profile details coming soon'}</p>
        </>
      )}
    />
  )
}

export default Users
