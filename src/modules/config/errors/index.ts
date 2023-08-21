export class RepeatTagError extends Error {
  constructor(public readonly tag: string) {
    super()
  }
}
