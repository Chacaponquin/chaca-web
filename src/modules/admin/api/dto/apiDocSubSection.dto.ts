import { LanguageConfig } from "@modules/shared/modules/appConfig/interfaces/language.interface"

export interface CreateApiDocSubSectionDTO {
  parentSectionID: string
}

export interface UpdateApiDocSubSectionDTO {
  subSectionID: string
  title: LanguageConfig
  content: LanguageConfig
}
