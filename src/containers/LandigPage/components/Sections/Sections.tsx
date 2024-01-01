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
    FIRST_SECTION_TEXT,
    SECOND_SECTION_TEXT,
    FOURTH_SECTION_TEXT,
  } = useTranslation({
    FIRST_SECTION_HEADER_1: { en: "Use our functions", es: "Utiliza nuestras funciones" },
    FIRST_SECTION_HEADER_2: { en: "for your fields", es: "para tus campos" },
    FIRST_SECTION_TEXT: {
      en: "Use the defined mock functions in the fields of your datasets to define the type of values that will be generated in each document",
      es: "Usa las funciones mock predefinidas en los campos de tus datasets para definir el tipo de valores que se generarán en cada documento",
    },

    SECOND_SECTION_HEADER_1: { en: "Create relations in", es: "Crea realciones entre" },
    SECOND_SECTION_HEADER_2: { en: "your datasets", es: "tus datasets" },
    SECOND_SECTION_TEXT: {
      en: "Relate the fields between your datasets to be able to take values from documents generated from another dataset from one field",
      es: "Relaciona los campos entre tus datasets para poder desde un campo tomar valores de los documentos generados de otro dataset",
    },

    FOURTH_SECTION_HEADER_1: { en: "Export your data", es: "Exporta tus datos" },
    FOURTH_SECTION_HEADER_2: { en: "in different formats", es: "en diferentes formatos" },
    FOURTH_SECTION_TEXT: {
      en: "Export the generated data in formats such as postgresql, python, typescript, etc. to fill your database or have your information in a script without having to write it",
      es: "Exporta los datos generados en formatos como postgresql, python, typescript, etc. para llenar tu base de datos o tener tu información en un script sin necesidad de escribirla",
    },
  })

  return (
    <SectionContent className="flex w-full flex-col lg:gap-24 py-20 gap-16">
      <Section>
        <ImageSection image={APP_IMAGES.PRESENTATION.SIMPLE_DATASET} />
        <TextSection
          firstHeader={FIRST_SECTION_HEADER_1}
          secondHeader={FIRST_SECTION_HEADER_2}
          text={FIRST_SECTION_TEXT}
        />
      </Section>

      <Section>
        <TextSection
          firstHeader={SECOND_SECTION_HEADER_1}
          secondHeader={SECOND_SECTION_HEADER_2}
          text={SECOND_SECTION_TEXT}
        />
        <ImageSection image={APP_IMAGES.PRESENTATION.RELATIONAL_DATASETS} />
      </Section>

      <Section>
        <ExportFormats />
        <TextSection
          firstHeader={FOURTH_SECTION_HEADER_1}
          secondHeader={FOURTH_SECTION_HEADER_2}
          text={FOURTH_SECTION_TEXT}
        />
      </Section>
    </SectionContent>
  )
}
