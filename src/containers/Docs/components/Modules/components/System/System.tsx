import {
  DIRECTORY_PATH,
  FILE_EXT,
  FILE_PATH,
  FILENAME,
  MIME_TYPE,
} from "@modules/docs/domain/core/sections/modules/system"
import { MethodSection } from "../../shared/components"
import { MIME_TYPE_CODE } from "./domain/mime-type"
import { FILE_EXT_CODE } from "./domain/file-ext"
import { FILENAME_CODE, FILENAME_PARAMS } from "./domain/filename"
import { FILE_PATH_CODE } from "./domain/file-path"
import { DIRECTORY_PATH_CODE } from "./domain/directory-path"

export default function System() {
  return (
    <>
      <MethodSection title={MIME_TYPE} code={MIME_TYPE_CODE} params={[]} />

      <MethodSection title={FILE_EXT} code={FILE_EXT_CODE} params={[]} />

      <MethodSection title={FILENAME} code={FILENAME_CODE} params={FILENAME_PARAMS} />

      <MethodSection title={FILE_PATH} code={FILE_PATH_CODE} params={[]} />

      <MethodSection title={DIRECTORY_PATH} code={DIRECTORY_PATH_CODE} params={[]} />
    </>
  )
}
