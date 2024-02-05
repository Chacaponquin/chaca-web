import { v4 as uuid } from "uuid"

interface DocSectionProps {
  folder: string
  title: string
  subSections: Array<SubSectionProps>
}

interface SubSectionProps {
  file: string
  title: string
}

export class DocSection {
  private _id = uuid()
  private _folder: string
  private _title: string
  private _subSections: Array<DocSubSection>

  constructor({ folder, subSections, title }: DocSectionProps) {
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
}

export class DocSubSection {
  private _id = uuid()
  private _file: string
  private _title: string

  constructor({ file, title }: SubSectionProps) {
    this._file = file
    this._title = title
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
}
