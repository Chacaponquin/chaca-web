import { DocSubSection, SubSectionProps } from "../../base"

export class ModuleDocSubSection extends DocSubSection {
  readonly apiId: string

  constructor(props: SubSectionProps & { apiId: string }) {
    super(props)
    this.apiId = props.apiId
  }

  methodUrl(sub: string): string {
    return `api/${this.apiId}/${sub}`
  }
}
