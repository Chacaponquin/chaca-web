import { STORAGE_KEYS } from "../constants"

export default function useLocalStorage() {
  function set(key: STORAGE_KEYS, value: string): void {
    window.localStorage.setItem(key, value)
  }

  function get(key: STORAGE_KEYS): string | null {
    return window.localStorage.getItem(key)
  }

  function remove(key: STORAGE_KEYS): void {
    window.localStorage.removeItem(key)
  }

  return { set, get, remove }
}
