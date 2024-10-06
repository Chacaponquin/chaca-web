import {
  BICYCLE,
  FUEL,
  MANUFACTURER,
  MODEL,
  TYPE,
  VEHICLE as VEHICLE_METHOD,
} from "@modules/docs/domain/core/sections/modules/vehicle"
import { MethodSection } from "../../shared/components"
import { MANUFACTURER_CODE } from "./domain/manufacturer"
import { TYPE_CODE } from "./domain/type"
import { BICYCLE_CODE } from "./domain/bicycle"
import { MODEL_CODE } from "./domain/model"
import { FUEL_CODE } from "./domain/fuel"
import { VEHICLE_CODE } from "./domain/vehicle"
import { SectionProvider } from "../../shared/context"
import { VEHICLE } from "@modules/docs/domain/core/sections/modules"

export default function Vehicle() {
  return (
    <SectionProvider section={VEHICLE} result="json">
      <MethodSection title={MANUFACTURER} code={MANUFACTURER_CODE} params={[]} />

      <MethodSection title={TYPE} code={TYPE_CODE} params={[]} />

      <MethodSection title={BICYCLE} code={BICYCLE_CODE} params={[]} />

      <MethodSection title={MODEL} code={MODEL_CODE} params={[]} />

      <MethodSection title={FUEL} code={FUEL_CODE} params={[]} />

      <MethodSection title={VEHICLE_METHOD} code={VEHICLE_CODE} params={[]} />
    </SectionProvider>
  )
}
