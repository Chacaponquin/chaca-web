import {
  FIRST_NAME,
  FULL_NAME,
  GENDER,
  JOB_AREA,
  JOB_LEVEL,
  LANGUAGE,
  LAST_NAME,
  PREFIX,
  SEX,
  ZODIAC_SIGN,
} from "@modules/docs/domain/core/sections/modules/person"
import { MethodSection } from "../../shared/components"
import { FIRST_NAME_CODE, FIRST_NAME_PARAMS } from "./domain/first-name"
import { FULL_NAME_CODE, FULL_NAME_PARAMS } from "./domain/full-name"
import { GENDER_CODE } from "./domain/gender"
import { JOB_AREA_CODE } from "./domain/job-area"
import { JOB_LEVEL_CODE } from "./domain/job-level"
import { LANGUAGE_CODE } from "./domain/language"
import { LAST_NAME_CODE, LAST_NAME_PARAMS } from "./domain/last-name"
import { PREFIX_CODE, PREFIX_PARAMS } from "./domain/prefix"
import { SEX_CODE } from "./domain/sex"
import { SectionProvider } from "../../shared/context"
import { PERSON } from "@modules/docs/domain/core/sections/modules"
import { ZODIAC_SIGN_CODE } from "./domain/zodiac-sign"

export default function Person() {
  return (
    <SectionProvider section={PERSON} result="json">
      <MethodSection title={FIRST_NAME} code={FIRST_NAME_CODE} params={FIRST_NAME_PARAMS} />

      <MethodSection title={FULL_NAME} code={FULL_NAME_CODE} params={FULL_NAME_PARAMS} />

      <MethodSection title={GENDER} code={GENDER_CODE} params={[]} />

      <MethodSection title={JOB_AREA} code={JOB_AREA_CODE} params={[]} />

      <MethodSection title={JOB_LEVEL} code={JOB_LEVEL_CODE} params={[]} />

      <MethodSection title={LANGUAGE} code={LANGUAGE_CODE} params={[]} />

      <MethodSection title={LAST_NAME} code={LAST_NAME_CODE} params={LAST_NAME_PARAMS} />

      <MethodSection title={PREFIX} code={PREFIX_CODE} params={PREFIX_PARAMS} />

      <MethodSection title={SEX} code={SEX_CODE} params={[]} />

      <MethodSection title={ZODIAC_SIGN} code={ZODIAC_SIGN_CODE} params={[]} />
    </SectionProvider>
  )
}
