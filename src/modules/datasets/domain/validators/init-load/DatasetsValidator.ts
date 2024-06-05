import { IValidator } from "@modules/app/domain"
import { ChacaError } from "@modules/app/exceptions"
import { SaveDataset } from "../../dataset/SaveDataset"
import { InvalidDatasetsException } from "@modules/datasets/errors/init-load"

interface Props {
  datasets: SaveDataset[]
}

export class DatasetsValidator implements IValidator {
  constructor(private readonly props: Props) {}

  validate(): ChacaError | null {
    if (Array.isArray(this.props.datasets)) {
      return null
    } else {
      return new InvalidDatasetsException()
    }
  }
}
