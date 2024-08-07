import { Image } from "@modules/app/components"
import { useExportFormats } from "./hooks"

export default function ExportFormats() {
  const { FORMATS } = useExportFormats()

  return (
    <div className="xl:flex hidden items-center">
      <div className="flex w-full gap-x-8 gap-y-4 flex-wrap justify-center">
        {FORMATS.map((f, index) => (
          <div
            key={index}
            className="p-4 rounded border-[1px] border-scale-9 bg-scale-5 transition-all duration-200 hover:border-purple-7"
          >
            <Image image={f.image} className="object-contain w-[65px] h-[65px]" />
          </div>
        ))}
      </div>
    </div>
  )
}
