const apiBaseUrl = import.meta.env.VITE_API_URL || '/api'

export async function getHealth() {
  const response = await fetch(`${apiBaseUrl}/health`)
  if (!response.ok) throw new Error('The API is unavailable')
  return response.json()
}

export { apiBaseUrl }
