import { Dataset } from "@modules/datasets/domain/dataset"

interface Props {
  datasets: Dataset[]
  id: string
}

export class DeleteReceiveRef {
  execute({ datasets, id }: Props) {
    for (const dat of datasets) {
      const refFields = dat.refFields()

      for (const ref of refFields) {
        if (ref.ref.includes(id)) {
          ref.setRef([])
        }
      }
    }
  }
}
