export type Languages = "en" | "es"

export type TranslationConfig<V> = { [language in Languages]: V }

export type LanguageFunction<T> = (props: T) => string

export type LanguageFunctionConfig<P> = { [language in Languages]: LanguageFunction<P> }

export type LanguageFunctionObject<T> = {
  [key in keyof T]: LanguageFunctionConfig<
    T[key] extends { [language in Languages]: (p: infer P) => string } ? P : never
  >
}

export type ReturnFunctionObject<T> = {
  [key in keyof T]: T[key] extends { [language in Languages]: (p: infer P) => string }
    ? LanguageFunction<P>
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
}

export type Translation<T, V> = {
  [key in keyof T]: V
}

export type TranslationInput<T, V> = {
  [key in keyof T]: TranslationConfig<V>
}
