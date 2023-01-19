export type Languages = "en" | "es"

export type LanguageConfig = { [language in Languages]: string }

export type LanguageObject<T> = {
  [key in keyof T]: LanguageConfig
}

export type ReturnLanguageObject<T> = {
  [key in keyof T]: string
}
