export type Languages = "en" | "es"

export type TranslationConfig<V> = { [language in Languages]: V }

export type Translation<T, V> = {
  [key in keyof T]: V
}

export type TranslationInput<T, V> = {
  [key in keyof T]: TranslationConfig<V>
}
