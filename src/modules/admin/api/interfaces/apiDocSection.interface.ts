export interface ApiDocSection {
  _id: string
  sectionTitle: string
  subSections: Array<ApiDocSubSectionMenu>
}

export interface ApiDocSubSectionMenu {
  _id: string
  title: string
}
