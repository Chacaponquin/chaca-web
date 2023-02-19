export interface ApiSection {
  sectionTitle: string
  subSections: Array<ApiSubSection>
  frontRoute: string
}

export interface ApiSubSection {
  title: string
  frontRoute: string
}
