import { Dataset, Field } from "@modules/datasets/domain/dataset"
import { ModalProps } from "@modules/modal/domain"

export class DeleteAllDatasetsModalProps extends ModalProps {}

export class AddFieldModalProps extends ModalProps {
  constructor(readonly parentfieldId: string, readonly datasetId: string) {
    super()
  }
}

export class DeleteDatasetModalProps extends ModalProps {
  constructor(readonly name: string, readonly id: string) {
    super()
  }
}

export class EditFieldModalProps extends ModalProps {
  constructor(readonly field: Field, readonly parentfieldId: string, readonly datasetId: string) {
    super()
  }
}

export class EditDatasetModalProps extends ModalProps {
  constructor(readonly dataset: Dataset) {
    super()
  }
}

export class ExportAllDatasetsModalProps extends ModalProps {
  constructor() {
    super()
  }
}

export class ExportDatasetImageModalProps extends ModalProps {
  constructor() {
    super()
  }
}

export class ExportDatasetModalProps extends ModalProps {
  constructor(readonly dataset: Dataset) {
    super()
  }
}
