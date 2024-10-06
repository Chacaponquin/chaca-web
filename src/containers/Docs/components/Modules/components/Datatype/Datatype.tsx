import {
  SPECIAL_CHARACTER,
  ALPHANUMERIC,
  BINARY_CODE,
  BOOLEAN,
  CHARACTERS,
  FLOAT,
  HEXADECIMAL,
  INT,
  MATRIX,
  NUMBER,
} from "@modules/docs/domain/core/sections/modules/datatype"
import { MethodSection } from "../../shared/components"
import { ALPHA_NUMERIC_CODE, ALPHA_NUMERIC_PARAMS } from "./domain/alpha-numeric"
import { BINARY_CODE_CODE, BINARY_CODE_PARAMS } from "./domain/binary-code"
import { BOOLEAN_CODE } from "./domain/boolean"
import { CHARACTERS_CODE, CHARACTERS_PARAMS } from "./domain/characters"
import { FLOAT_CODE, FLOAT_PARAMS } from "./domain/float"
import { HEXADECIMAL_CODE, HEXADECIMAL_PARAMS } from "./domain/hexadecimal"
import { INT_CODE, INT_PARAMS } from "./domain/int"
import { MATRIX_CODE, MATRIX_PARAMS } from "./domain/matrix"
import { NUMBER_CODE, NUMBER_PARAMS } from "./domain/number"
import { SPECIAL_CHARACTER_CODE } from "./domain/special-character"
import { SectionProvider } from "../../shared/context"
import { DATATYPE } from "@modules/docs/domain/core/sections/modules"

export default function Datatype() {
  return (
    <SectionProvider section={DATATYPE} result="json">
      <MethodSection title={SPECIAL_CHARACTER} code={SPECIAL_CHARACTER_CODE} params={[]} />

      <MethodSection title={BOOLEAN} code={BOOLEAN_CODE} params={[]} />

      <MethodSection code={INT_CODE} params={INT_PARAMS} title={INT} />

      <MethodSection code={FLOAT_CODE} params={FLOAT_PARAMS} title={FLOAT} />

      <MethodSection code={NUMBER_CODE} params={NUMBER_PARAMS} title={NUMBER} />

      <MethodSection code={HEXADECIMAL_CODE} params={HEXADECIMAL_PARAMS} title={HEXADECIMAL} />

      <MethodSection code={MATRIX_CODE} params={MATRIX_PARAMS} title={MATRIX} />

      <MethodSection title={CHARACTERS} code={CHARACTERS_CODE} params={CHARACTERS_PARAMS} />

      <MethodSection code={BINARY_CODE_CODE} params={BINARY_CODE_PARAMS} title={BINARY_CODE} />

      <MethodSection code={ALPHA_NUMERIC_CODE} params={ALPHA_NUMERIC_PARAMS} title={ALPHANUMERIC} />
    </SectionProvider>
  )
}
