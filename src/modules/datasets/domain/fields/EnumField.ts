export class EnumField {
  public static transformArray(values: Array<string>): string {
    return values.join("\n")
  }

  public static transformString(values: string): Array<string> {
    return values.split("\n").map((s) => s.trim())
  }
}
