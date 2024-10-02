export default function useEnv() {
  const API_ROUTE = import.meta.env.VITE_API_URL as string
  const SOCKET_URL = import.meta.env.VITE_SOCKET_URL as string

  const ALGOLIA_READ_API_KEY = import.meta.env.VITE_ALGOLIA_READ_API_KEY as string
  const ALGOLIA_API_ID = import.meta.env.VITE_ALGOLIA_API_ID as string

  return { API_ROUTE, SOCKET_URL, ALGOLIA_READ_API_KEY, ALGOLIA_API_ID }
}
