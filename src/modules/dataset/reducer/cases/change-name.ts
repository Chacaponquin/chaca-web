import { Schema } from "@modules/dataset/domain/core"
import { DatasetUseCase } from "./base-use-case"

interface ExecuteProps {
  schemaId: string
  newName: string
}

export class ChangeSchemaName extends DatasetUseCase<ExecuteProps> {
  public execute({ schemaId, newName }: ExecuteProps): Schema[] {
    const newDataset = this.dataset.map((dat) => {
      if (dat.id === schemaId) {
        dat.setName(newName)
      }

      return dat
    })

    return newDataset
  }
}
