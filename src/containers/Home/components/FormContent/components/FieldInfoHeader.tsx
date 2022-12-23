import { Fragment, useContext } from "react";
import { Change, Delete } from "../../../../../shared/assets/icons";
import { v4 as uuid } from "uuid";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { ChacaIconButton } from "../../../../../shared/components/ChacaButton/ChacaButton";

const FieldInfoHeader = () => {
  const { selectField, selectedDataset } = useContext(DatasetsContext);

  const handleRename = () => {};

  const handleDelete = () => {};

  const location = selectField
    ? selectedDataset.getFieldLocation(selectField.id)
    : [];

  return (
    <div className="w-full bg-white py-2 flex justify-between items-center px-5 border-b-2">
      <div className="flex gap-3 text-lg">
        {location.map((el, i) => (
          <Fragment key={uuid()}>
            <p className="mb-0 font-fontBold">{el}</p>
            {i !== location.length - 1 && (
              <p className="mb-0 font-fontBold">{">"}</p>
            )}
          </Fragment>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <ChacaIconButton
          icon={<Change size={19} />}
          color={"primary"}
          size={"small"}
          text={"Rename"}
          onClick={handleRename}
        />

        <ChacaIconButton
          icon={<Delete size={19} />}
          color={"danger"}
          size={"small"}
          text={"Delete"}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default FieldInfoHeader;
