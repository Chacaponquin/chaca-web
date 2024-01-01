import { SectionContent } from "@containers/LandigPage/shared/components"
import { ExportFormats, ImageSection, Section, TextSection } from "./components"
import { APP_IMAGES } from "@modules/app/constants"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Sections() {
  const {
    SECOND_SECTION_HEADER_1,
    SECOND_SECTION_HEADER_2,
    FIRST_SECTION_HEADER_1,
    FIRST_SECTION_HEADER_2,
    FOURTH_SECTION_HEADER_1,
    FOURTH_SECTION_HEADER_2,
  } = useTranslation({
    FIRST_SECTION_HEADER_1: { en: "Use mock functions", es: "Utiliza las funciones mock" },
    FIRST_SECTION_HEADER_2: { en: "for your fields", es: "para tus campos" },

    SECOND_SECTION_HEADER_1: { en: "Create relations in", es: "Crea realciones entre" },
    SECOND_SECTION_HEADER_2: { en: "your datasets", es: "tus datasets" },

    FOURTH_SECTION_HEADER_1: { en: "Export your data", es: "Exporta tus datos" },
    FOURTH_SECTION_HEADER_2: { en: "in different formats", es: "en diferentes formatos" },
  })

  return (
    <SectionContent className="flex w-full flex-col gap-24 py-20">
      <Section>
        <ImageSection image={APP_IMAGES.PRESENTATION.SIMPLE_DATASET} />
        <TextSection firstHeader={FIRST_SECTION_HEADER_1} secondHeader={FIRST_SECTION_HEADER_2} />
      </Section>

      <Section>
        <TextSection firstHeader={SECOND_SECTION_HEADER_1} secondHeader={SECOND_SECTION_HEADER_2} />
        <ImageSection image={APP_IMAGES.PRESENTATION.RELATIONAL_DATASETS} />
      </Section>

      <Section>
        <ExportFormats />
        <TextSection firstHeader={FOURTH_SECTION_HEADER_1} secondHeader={FOURTH_SECTION_HEADER_2} />
      </Section>
    </SectionContent>
  )
}
