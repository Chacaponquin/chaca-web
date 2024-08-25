import { Dataset } from "@modules/datasets/domain/core"

export abstract class DatasetUseCase<T = undefined> {
  constructor(protected readonly datasets: Array<Dataset>) {}

  public abstract execute(props: T): Array<Dataset>
}
