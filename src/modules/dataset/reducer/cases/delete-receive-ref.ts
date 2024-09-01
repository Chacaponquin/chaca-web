import { Schema } from "@modules/dataset/domain/core"

interface Props {
  dataset: Schema[]
  id: string
}

export class DeleteReceiveRef {
  execute({ dataset, id }: Props) {
    for (const dat of dataset) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.ref.includes(id)) {
          ref.setRef([])
        }
      }
    }
  }
}
