import { Header } from "../../shared/components"
import { Definition, TsParams } from "./components"

export default function Typescript() {
  return (
    <>
      <Header extension="ts" format="typescript" />
      <TsParams />
      <Definition />
    </>
  )
}
