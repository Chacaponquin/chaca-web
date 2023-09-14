import { Key } from "@modules/app/modules/icon/components"
import clsx from "clsx"

export default function FieldKeyIcon({ isKey }: { isKey: boolean }) {
  const KEY_CLASS = clsx({ invisible: !isKey })

  return (
    <div className={KEY_CLASS}>
      <Key size={17} />
    </div>
  )
}
