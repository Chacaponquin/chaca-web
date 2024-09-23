import { Header } from "../../shared/components"
import { Definition, JsonParams } from "./components"

export default function JSON() {
  return (
    <>
      <Header extension="json" format="json" />

      <JsonParams />

      <Definition />
    </>
  )
}
