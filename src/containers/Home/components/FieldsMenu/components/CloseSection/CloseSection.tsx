import { X } from "@modules/app/modules/icon/components"

export default function CloseSection({
  handleCloseFieldsMenu,
}: {
  handleCloseFieldsMenu: () => void
}) {
  return (
    <div className="flex justify-end pt-3 px-4">
      <button onClick={handleCloseFieldsMenu}>
        <X size={18} />
      </button>
    </div>
  )
}
