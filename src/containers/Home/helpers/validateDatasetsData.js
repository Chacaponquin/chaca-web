import { DATA_TYPES } from "../../../shared/helpers/datasetsUtils";

export const validateDatasetsData = (datasets) => {
  for (const dat of datasets) {
    for (const field of dat.fields) {
      if (field.dataType.type === DATA_TYPES.REF) {
        if (!field.dataType.fieldRef)
          throw new Error(
            "Loas campos referenica deben tener un campo al que se pueda referenciar"
          );
      }
    }
  }

  for (const dat of datasets) {
    let cont = 0;
    for (let j = 0; j < datasets.length; j++) {
      if (datasets[j].name === dat) cont++;
    }

    if (cont >= 2)
      throw Error("No puede haber datasets con los mismos nombres");
  }

  for (let x = 0; x < datasets.length; x++) {
    const fields = datasets[x].fields;

    for (let i = 0; i < fields.length; i++) {
      let error = null;

      if (!fields[i].name) error = "No puede quedarse ningun campo sin nombre";
      else if (!fields[i].type)
        error = "Todos los campos deben tener un tipo de dato";
      else if (
        fields.find(
          (el) => el.id !== fields[i].id && fields[i].name === el.name
        )
      )
        error = "No puede haber dos campos con los mismos nombres";

      if (error) throw new Error(error);
    }
  }
};
