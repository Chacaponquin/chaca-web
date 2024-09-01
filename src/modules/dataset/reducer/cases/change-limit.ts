import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"

interface ExecuteProps {
  limit: number
  schemaId: string
}

export class ChangeSchemaLimit extends DatasetUseCase<ExecuteProps> {
  public execute({ schemaId, limit }: ExecuteProps): Schema[] {
    const newDataset = this.dataset.map((dat) => {
      if (dat.id === schemaId) {
        dat.setLimit(limit)
      }

      return dat
    })

    return newDataset
  }
}
