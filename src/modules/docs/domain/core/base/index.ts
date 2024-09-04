interface DocSectionProps {
  url: string
  title: string
}

interface SubSectionProps {
  title: string
  parent: DocSection
  url: string
}

export interface SubSectionInf {
  id: string
  title: string
  url: string
}

export abstract class DocSection {
  readonly url: string
  readonly title: string
  sections: DocSubSection[]

  constructor({ url, title }: DocSectionProps) {
    this.url = url
    this.title = title
    this.sections = []
  }

  push(s: DocSubSection[]): void {
    this.sections = s
  }
}

export abstract class DocSubSection {
  readonly title: string
  private readonly _url: string
  readonly parent: DocSection

  constructor({ title, parent, url }: SubSectionProps) {
    this._url = url
    this.title = title
    this.parent = parent
  }

  get url() {
    return `${this.parent.url}/${this._url}`
  }

  get redirect(): string {
    return `/docs/${this.parent.url}/${this._url}`
  }

  get location(): string[] {
    return [this.parent.title, this.title]
  }

  get titleSeo(): string {
    return `${this.title} | Chaca Docs`
  }

  get next(): DocSubSection | null {
    const index = this.parent.sections.indexOf(this)

    if (index !== -1) {
      if (index < this.parent.sections.length - 1) {
        return this.parent.sections[index + 1]
      }
    }

    return null
  }

  get back(): DocSubSection | null {
    const index = this.parent.sections.indexOf(this)

    if (index !== -1) {
      if (index > 0) {
        return this.parent.sections[index - 1]
      }
    }

    return null
  }
}
