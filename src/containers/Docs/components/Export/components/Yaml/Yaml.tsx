import { Header } from "../../shared/components"
import { Definition, YamlParams } from "./components"

export default function Yaml() {
  return (
    <>
      <Header extension="yml" format="yaml" />
      <YamlParams />
      <Definition />
    </>
  )
}
