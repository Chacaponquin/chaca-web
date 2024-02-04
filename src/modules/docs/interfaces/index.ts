export interface DocSection {
  folder: string
  title: string
  subSections: Array<DocSubSection>
}

export interface DocSubSection {
  file: string
  title: string
}
