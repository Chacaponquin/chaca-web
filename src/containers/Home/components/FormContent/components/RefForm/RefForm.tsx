import { useContext, useMemo } from "react";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { DatasetsContext } from "../../../../../../shared/context/DatasetsContext";
import {
  DatasetField,
  RefDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import DatasetToRef from "./components/DatasetToRef";

const RefForm = ({ field }: { field: DatasetField<RefDataType> }) => {
  const { datasets, selectedDataset } = useContext(DatasetsContext);

  const toRef = useMemo(() => {
    return datasets.filter((d) => {
      let availible = true;

      if (d.id === selectedDataset.id) availible = false;
      else {
        const fieldsAvailable = d.fields.filter((f) => {
          return f.dataType.type !== DATA_TYPES.REF && f.name && !f.isArray;
        });

        if (fieldsAvailable.length === 0) availible = false;
      }

      return availible;
    });
  }, [datasets, selectedDataset.id]);

  return (
    <div className="flex w-full px-3">
      {toRef.length > 0 ? (
        <div className="grid w-full gap-x-5 gap-y-4 grid-cols-1">
          {toRef.map((d) => (
            <DatasetToRef key={d.id} dataset={d} selectField={field} />
          ))}
        </div>
      ) : (
        <NoFieldsToRef />
      )}
    </div>
  );
};

const NoFieldsToRef = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <img
        src="./images/404_Not_Found.svg"
        alt="not-found"
        className="w-[300px]"
      />
      <p className="mb-0 -mt-5 text-2xl font-fontBold text-slate-500">
        No existen campos para referenciar
      </p>
    </div>
  );
};

export default RefForm;
