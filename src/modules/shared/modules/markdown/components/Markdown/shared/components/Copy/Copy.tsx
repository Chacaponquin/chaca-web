import { Clipboard } from "@modules/app/modules/icon/components"

interface Props {
  code: string
}

export default function Copy({ code }: Props) {
  function handleCopy() {
    window.localStorage.setItem("s", code)
  }

  return (
    <button type="button" className="stroke-white" onClick={handleCopy}>
      <Clipboard size={18} />
    </button>
  )
}
