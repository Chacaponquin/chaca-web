import { Header } from "../../shared/components"
import { Definition, PythonParams } from "./components"

export default function Python() {
  return (
    <>
      <Header extension="py" format="python" />

      <PythonParams />

      <Definition />
    </>
  )
}
