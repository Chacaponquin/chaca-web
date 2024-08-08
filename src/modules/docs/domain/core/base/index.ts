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
  private _url: string
  readonly parent: DocSection

  constructor({ title, parent, url }: SubSectionProps) {
    this._url = url
    this.title = title
    this.parent = parent
  }

  get url() {
    return `/${this.parent.url}/${this._url}`
  }
}
