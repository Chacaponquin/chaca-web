import { useExportImage } from "./hooks"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { ChacaSelect, ChacaTextInput } from "@form/components"
import { Image } from "./components"
import { Modal } from "@modules/modal/components"
import { ExportImageProps } from "@containers/Home/domain/props"
import { FormSection } from "../../shared/shared/components"

type Props = {
  handleExportImage(props: ExportImageProps): void
}

export default function ExportImage({ handleExportImage }: Props) {
  const { handleNext, showImage, form, handleChangeFormat, handleChangeName, formats } =
    useExportImage({ handleExportImage: handleExportImage })

  const { TEXT, TITLE, NAME_PLACEHOLDER, FORMAT_PLACEHOLDER, NAME, FORMAT } = useTranslation({
    TEXT: { en: "Export", es: "Exportar" },
    TITLE: { en: "Export image", es: "Exportar imagen" },
    NAME_PLACEHOLDER: { en: "Name", es: "Nombre" },
    FORMAT_PLACEHOLDER: { en: "Format", es: "Formato" },
    NAME: { en: "Filename", es: "Nombre de archivo" },
    FORMAT: { en: "Format", es: "Formato" },
  })

  return (
    <Modal handleNext={handleNext} name="export-image" nextText={TEXT} title={TITLE} type="edit">
      <Image src={showImage} />

      <div className="flex flex-col gap-y-3 w-full">
        <FormSection vertical={false} labelText={NAME}>
          <ChacaTextInput
            disabled={false}
            name="export-image"
            value={form.name}
            onChange={handleChangeName}
            size="base"
            type="text"
            placeholder={NAME_PLACEHOLDER}
          />
        </FormSection>

        <FormSection labelText={FORMAT} vertical={false}>
          <ChacaSelect
            options={formats}
            onChange={handleChangeFormat}
            label={(f) => f.name}
            placeholder={FORMAT_PLACEHOLDER}
            size="base"
            id="export-image-select"
            value={(f) => f === form.format}
          />
        </FormSection>
      </div>
    </Modal>
  )
}
