import { Header } from "../../shared/components"
import { Definition, JavaParams } from "./components"

export default function Java() {
  return (
    <>
      <Header extension="java" format="java" />
      <JavaParams />
      <Definition />
    </>
  )
}
