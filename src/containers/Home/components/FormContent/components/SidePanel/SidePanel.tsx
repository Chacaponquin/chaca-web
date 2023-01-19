import {
  DatasetField,
  FieldDataType,
  SingleValueDataType,
} from "@modules/datasets/interfaces/datasets.interface"
import { API_ROUTES } from "@shared/routes"
import { GuideContainer, SidePanelHeader, SingleValueGuide } from "./components"
import { useLanguage } from "@shared/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"

const SidePanel = ({ selectField }: { selectField: DatasetField<FieldDataType> }) => {
  const { HEADER_TEXT } = useLanguage({ HEADER_TEXT: { en: "Documentation", es: "Documentación" } })

  return (
    <div className='bg-white 2xl:block hidden transition-all duration-300 px-5 py-3 border-l-2 min-w-[460px] max-w-[460px] overflow-y-auto'>
      <SidePanelHeader title={HEADER_TEXT} />

      {selectField.dataType.type === DATA_TYPES.SINGLE_VALUE && (
        <SingleValueGuide field={selectField as DatasetField<SingleValueDataType>} />
      )}

      {selectField.dataType.type === DATA_TYPES.CUSTOM && (
        <GuideContainer route={API_ROUTES.DOCS.GET_CUSTOM_FORM_GUIDES} />
      )}
      {selectField.dataType.type === DATA_TYPES.REF && (
        <GuideContainer route={API_ROUTES.DOCS.GET_REF_FORM_GUIDES} />
      )}
    </div>
  )
}

export default SidePanel
