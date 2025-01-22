import { STORAGE_KEYS } from "../constants/storage-keys"

export class LocalStorage {
  static set(key: STORAGE_KEYS, value: string): void {
    window.localStorage.setItem(key, value)
  }

  static get(key: STORAGE_KEYS): string | null {
    return window.localStorage.getItem(key)
  }

  static remove(key: STORAGE_KEYS): void {
    window.localStorage.removeItem(key)
  }
}
