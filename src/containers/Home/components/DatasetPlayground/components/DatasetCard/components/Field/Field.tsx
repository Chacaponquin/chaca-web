import { Key } from "@modules/app/modules/icon/components"
import clsx from "clsx"
import { FieldNode } from "@modules/datasets/domain/tree"

export default function Field({ field }: { field: FieldNode; selectFieldPoint: null | string }) {
  const KEY_CLASS = clsx({ invisible: !field.isKey })



  return (
    <div className="flex w-full text-base items-center py-2 px-5 justify-between" id={field.id}>
      <div className="flex items-center gap-x-3">
        <div className={KEY_CLASS}>
          <Key size={17} />
        </div>

        <p className="font-fontCodeBold">{field.name}</p>
      </div>

      <p className="font-fontCodeBold">{field.stringInf()}</p>
    </div>
  )
}
