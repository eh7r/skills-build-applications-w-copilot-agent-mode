const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const codespaceApiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : '/api'
const apiBaseUrl = import.meta.env.VITE_API_URL || codespaceApiUrl

export function getCollectionItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchCollection(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`)
  if (!response.ok) throw new Error(`Unable to load ${resource}`)
  return getCollectionItems(await response.json())
}

export async function getHealth() {
  const response = await fetch(`${apiBaseUrl}/health`)
  if (!response.ok) throw new Error('The API is unavailable')
  return response.json()
}

export { apiBaseUrl }
