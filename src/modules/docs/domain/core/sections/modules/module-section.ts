import { DocSubSection, SubSectionProps } from "../../base"

export interface ModuleSubSectionTitle {
  title: string
  id: string
}

export class ModuleDocSubSection extends DocSubSection {
  readonly apiId: string

  constructor(props: SubSectionProps & { apiId: string; titles: ModuleSubSectionTitle[] }) {
    super(props)
    this.apiId = props.apiId
    this.titles = [...props.titles.map((t) => ({ title: { en: t.title, es: t.title }, id: t.id }))]
  }

  methodUrl(sub: string): string {
    return `api/v1/module/${this.apiId}/${sub}`
  }
}
