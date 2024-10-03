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

export default function Datatype() {
  return (
    <>
      <MethodSection
        apiId="special_character"
        title="Special character"
        code={SPECIAL_CHARACTER_CODE}
        method="specialCharacter"
        params={[]}
      />

      <MethodSection
        apiId="boolean"
        code={BOOLEAN_CODE}
        method="boolean"
        params={[]}
        title="Boolean"
      />

      <MethodSection apiId="int" code={INT_CODE} method="int" params={INT_PARAMS} title="Integer" />

      <MethodSection
        method="float"
        apiId="float"
        code={FLOAT_CODE}
        params={FLOAT_PARAMS}
        title="Float"
      />

      <MethodSection
        code={NUMBER_CODE}
        params={NUMBER_PARAMS}
        apiId="number"
        method="number"
        title="Number"
      />

      <MethodSection
        apiId="hexadecimal"
        code={HEXADECIMAL_CODE}
        method="hexadecimal"
        params={HEXADECIMAL_PARAMS}
        title="Hexadecimal"
      />

      <MethodSection
        apiId="matrix"
        code={MATRIX_CODE}
        method="matrix"
        params={MATRIX_PARAMS}
        title="Matrix"
      />

      <MethodSection
        apiId="characters"
        code={CHARACTERS_CODE}
        params={CHARACTERS_PARAMS}
        method="characters"
        title="Characters"
      />

      <MethodSection
        code={BINARY_CODE_CODE}
        apiId="binary_code"
        method="binaryCode"
        params={BINARY_CODE_PARAMS}
        title="Binary code"
      />

      <MethodSection
        method="alphaNumeric"
        apiId="alphanumeric"
        code={ALPHA_NUMERIC_CODE}
        params={ALPHA_NUMERIC_PARAMS}
        title="Alphanumeric"
      />
    </>
  )
}
