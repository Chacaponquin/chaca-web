export interface ApiSection {
  sectionTitle: string
  subSections: Array<ApiSubSection>
}

export interface ApiSubSection {
  title: string
  route: string
}
