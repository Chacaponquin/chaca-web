import { useState } from "react";
import Modal from "../TypeModal/Modal";
import InputDiv from "./components/InputDiv";
import { Dataset } from "../../../../shared/interfaces/datasets.interface";
import DatasetDivHeader from "./components/DatasetDivHeader";
import { v4 as uuid } from "uuid";

const DatasetForm = ({ id, name, fields }: Dataset) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpenModal = (id: string | null) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => setOpenModal(null);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col rounded-md h-max w-full">
        {openModal && (
          <Modal fieldID={openModal} handleCloseModal={handleCloseModal} />
        )}

        <DatasetDivHeader name={name} datasetID={id} />

        <table className="table-auto w-full" cellSpacing={5}>
          <tbody>
            {fields.map((field, i) => (
              <InputDiv
                datasetID={id}
                handleOpenModal={handleOpenModal}
                key={uuid()}
                field={field}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatasetForm;
