import { ChacaError } from "@modules/app/exceptions"

export class DatasetError extends ChacaError {}

export class RepeatDatasetNameError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "The dataset name can not be an empty string",
        es: "El nombre del nuevo dataset no puede estar vacío",
      },
      id: "repeat-dataset-name",
    })
  }
}

export class EmptyFieldNameError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: `The field name can not be an empty string`,
        es: "El nombre del nuevo campo no puede estar vacío",
      },
      id: "field-empty-name",
    })
  }
}

export class EmptyDatasetNameError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "Aldready exists a dataset with that name",
        es: "Ya existe un dataset con ese nombre",
      },
      id: "empty-dataset-name",
    })
  }
}

export class RepeatSameLevelFieldNameError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: `Aldready exists an field with that name`,
        es: "Ya existe un campo con este nombre",
      },
      id: "field-repeat-name",
    })
  }
}

export class InputEmptyRefFieldError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: `If the field is going to be a reference field you must reference a field from another dataset`,
        es: `Si el campo va a ser un campo referencia debes referenciar algún campo de otro dataset`,
      },
      id: "empty-ref-field",
    })
  }
}

export class EmptyRefFieldError extends DatasetError {
  constructor(field: string) {
    super({
      msg: {
        en: `If the field '${field}' is going to be a reference field you must reference a field from another dataset`,
        es: `Si el campo '${field}' va a ser un campo referencia debes referenciar algún campo de otro dataset`,
      },
      id: "empty-ref-field",
    })
  }
}

export class EmptyEnumFieldError extends DatasetError {
  constructor(field: string) {
    super({
      msg: {
        en: `The ${field} field is an enum and has no values to select from`,
        es: `El campo ${field} es enum y no tiene valores para seleccionar`,
      },
      id: "empty-enum-field",
    })
  }
}
export class EmptySequentialFieldError extends DatasetError {
  constructor(field: string) {
    super({
      msg: {
        en: `The field ${field} is sequential and has no values to generate. You must create a number of documents in the dataset that is less than or equal to the number of values in the sequence`,
        es: `El campo ${field} es sequencial y no tiene valores para generar. Debes crear una cantidad de documentos en el dataset que sea menor o igual a la cantidad de valores de la secuencia`,
      },
      id: "empty-sequential-field",
    })
  }
}

export class CreateDatasetError extends DatasetError {
  constructor(message: string) {
    super({
      id: "create-dataset-error",
      msg: {
        en: message,
        es: message,
      },
    })
  }
}

export class DownloadDatasetError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "There was an error creating the dataset",
        es: "Hubo un error en la creación de los dataset",
      },
      id: "creation-error",
    })
  }
}

export class EmptyArrayValueError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "None of the possible values can be empty",
        es: "Ninguno de los posibles valores puede estar vacío",
      },
      id: "empty-array-value",
    })
  }
}

export class CyclicEventError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: `You are trying to access your data cyclically in one of your functions`,
        es: `Estás intentando acceder a tus datos de forma cíclica en alguna de tus funciones`,
      },
      id: "cyclic-event",
    })
  }
}

export class InvalidArrayNumberValue extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "Values that are numbers cannot include characters other than digits",
        es: "Los valores que son números no pueden incluir caracteres que no seas dígitos",
      },
      id: "invalid-array-number",
    })
  }
}

export class InvalidArrayJSONValue extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "Values that are of type JSON must have valid syntax",
        es: "Los valores que son de tipo JSON deben tener una sintáxis válida",
      },
      id: "invalid-array-json",
    })
  }
}

export class EmptyValuesError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "You must insert at least one value that can be chosen",
        es: "Debes insertar al menos un valor que puede ser escogido",
      },
      id: "empty-array-values",
    })
  }
}

export class InvalidChanceValueError extends DatasetError {
  constructor() {
    super({
      msg: {
        en: "The probabilities values must be between 0 and 1",
        es: "Los valores para las probabilidades deben encontrarse entre 0 y 1",
      },
      id: "invalid-change-value",
    })
  }
}

export class InvalidPickCountError extends DatasetError {
  constructor() {
    super({ id: "invalid-pick-count", msg: { en: "", es: "" } })
  }
}

export class EmptyCustomFunctionError extends DatasetError {
  constructor() {
    super({
      id: "empty-custom-field",
      msg: {
        en: "The 'custom' field function cannot be empty",
        es: `La función del campo 'custom' no puede estar vacía`,
      },
    })
  }
}

export class NotEnoughValuesRefError extends DatasetError {
  constructor(keyField: string, refField: string) {
    super({
      id: "not-enough-values-ref",
      msg: {
        en: `There are not enough values of field '${keyField}' for field '${refField}'`,
        es: `No existen suficientes valores del campo '${keyField}' para el campo '${refField}'`,
      },
    })
  }
}

export class NotExistFieldError extends DatasetError {
  constructor(field: string, refField: string) {
    super({
      id: "not-exist-field-error",
      msg: {
        en: `You are trying to reference from field '${refField}' to field '${field}', which does not exist`,
        es: `Estás intentando referenciar desde el campo '${refField}' al campo '${field}', el cual no existe`,
      },
    })
  }
}

export class TryRefANotKeyField extends DatasetError {
  constructor(field: string) {
    super({
      msg: {
        en: `You are trying to reference the field '${field}' without it being a key field`,
        es: `Estás intentando referenciar al campo '${field}' sin ser un campo llave`,
      },
      id: "try-ref-a-not-key-field-error",
    })
  }
}
