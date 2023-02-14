export interface ApiDocSection {
  _id: string
  sectionTitle: string
  subSections: Array<ApiDocSubSection>
}

export interface ApiDocSubSection {
  _id: string
  title: string
}
