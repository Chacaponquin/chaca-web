import { DocSubSection, SubSectionProps } from "../../base"

export interface ModuleSubSectionTitle {
  title: string
  id: string
}

type Props = Omit<SubSectionProps, "description"> & {
  apiId: string
  titles: ModuleSubSectionTitle[]
}

export class ModuleDocSubSection extends DocSubSection {
  readonly apiId: string

  constructor(props: Props) {
    super({
      ...props,
      description: {
        es: `Aprende sobre los módulos existentes en la sección ${props.title.en} para generar datos mock`,
        en: `Learn about existing modules in the ${props.title.en} section to generate mock data`,
      },
    })
    this.apiId = props.apiId
    this.titles = [...props.titles.map((t) => ({ title: { en: t.title, es: t.title }, id: t.id }))]
  }

  methodUrl(sub: string): string {
    return `api/v1/module/${this.apiId}/${sub}`
  }
}
