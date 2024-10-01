import { useModal } from "@modules/modal/hooks"
import { SearchDoc } from "./components"
import { SearchDocModalProps } from "../../domain/modal"

export default function Modals() {
  const { openModal } = useModal()

  return <>{openModal instanceof SearchDocModalProps && <SearchDoc />}</>
}
