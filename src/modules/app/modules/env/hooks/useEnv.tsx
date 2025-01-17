import { ALGOLIA_API_ID, ALGOLIA_READ_API_KEY, API_ROUTE, SOCKET_URL } from "../domain/env"

export default function useEnv() {
  return { API_ROUTE, SOCKET_URL, ALGOLIA_READ_API_KEY, ALGOLIA_API_ID }
}
