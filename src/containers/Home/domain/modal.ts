import { Field } from "@modules/dataset/domain/core/field"
import { Schema } from "@modules/dataset/domain/core/schema"
import { ModalProps } from "@modules/modal/domain"

export class DeleteAllSchemasModalProps extends ModalProps {}

export class AddFieldModalProps extends ModalProps {
  constructor(readonly parentfieldId: string, readonly schemaId: string) {
    super()
  }
}

export class DeleteSchemaModalProps extends ModalProps {
  constructor(readonly name: string, readonly id: string) {
    super()
  }
}

export class EditFieldModalProps extends ModalProps {
  constructor(readonly field: Field, readonly parentfieldId: string, readonly schemaId: string) {
    super()
  }
}

export class EditSchemaModalProps extends ModalProps {
  constructor(readonly schema: Schema) {
    super()
  }
}

export class ExportDatasetModalProps extends ModalProps {
  constructor() {
    super()
  }
}

export class ExportDatasetImageModalProps extends ModalProps {
  constructor() {
    super()
  }
}

export class ExportSchemaModalProps extends ModalProps {
  constructor(readonly schema: Schema) {
    super()
  }
}
