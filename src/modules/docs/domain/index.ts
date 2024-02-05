import { v4 as uuid } from "uuid"

interface DocSectionProps {
  folder: string
  title: string
  subSections?: Array<SubSectionProps>
}

interface SubSectionProps {
  file: string
  title: string
  subSections?: Array<SubSectionProps>
}

export interface SubSectionInf {
  id: string
  file: string
  folder: string
}

export class DocSection {
  private _id = uuid()
  private _folder: string
  private _title: string
  private _subSections: Array<DocSubSection>

  constructor({ folder, subSections = [], title }: DocSectionProps) {
    this._folder = folder
    this._title = title
    this._subSections = subSections.map((s) => new DocSubSection(s))
  }

  get folder() {
    return this._folder
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get subSections() {
    return this._subSections
  }

  get allSubSections(): Array<SubSectionInf> {
    const all: Array<SubSectionInf> = []

    for (const sub of this.subSections) {
      all.push({ folder: this.folder, file: sub.file, id: sub.id })
    }

    return all
  }
}

export class DocSubSection {
  private _id = uuid()
  private _file: string
  private _title: string
  private _subSections: Array<DocSubSection>

  constructor({ file, title, subSections = [] }: SubSectionProps) {
    this._file = file
    this._title = title
    this._subSections = subSections.map((s) => new DocSubSection(s))
  }

  get id() {
    return this._id
  }

  get file() {
    return this._file
  }

  get title() {
    return this._title
  }

  get subSections() {
    return this._subSections
  }
}
