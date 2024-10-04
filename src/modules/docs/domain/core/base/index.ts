import { SaveIndex } from "./save-index"

export interface SectionTitle {
  id: string
  title: string
}

interface DocSectionProps {
  url: string
  title: string
}

export interface SubSectionProps {
  title: string
  parent: DocSection
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

  save(): SaveIndex[] {
    return this.sections.map((s) => s.save())
  }
}

export abstract class DocSubSection {
  readonly title: string
  private readonly _url: string
  readonly parent: DocSection
  titles: SectionTitle[]

  constructor({ title, parent, url }: SubSectionProps) {
    this._url = url
    this.title = title
    this.parent = parent
    this.titles = []
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

  buildUrl(url: string): string {
    return `${this.redirect}#${url}`
  }

  buildIdUrl(id: string): string {
    return `#${id}`
  }

  save(): SaveIndex {
    return { title: this.title, location: this.location.join(" > "), url: this.url }
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
