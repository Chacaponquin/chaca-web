import React, { useState } from "react";
import Icon from "supercons";
import JSONTreeCont from "../../../shared/components/JsonTree/JSONTreeCont";
import DeleteSchemaModal from "./DeleteSchemaModal";

const SchemaCard = ({ _id, name, data, handleDeleteSchema }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(true);

  const handleOpenModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <div className="flex flex-col rounded-md">
      <div className="font-fontCodeBold text-xl py-2 px-4 border-2 bg-slate-100 rounded-tr-md rounded-tl-md">
        {name}
      </div>

      <div className="json-container px-5 border-l-2 border-r-2">
        <JSONTreeCont data={data} />
      </div>

      <div className="flex w-full flex-col rounded-br-md rounded-bl-md bg-slate-100 py-2 px-4 border-2 ">
        <div className="flex items-center gap-5 justify-end">
          <button>
            <Icon glyph="copy" />
          </button>
          <button onClick={handleOpenModal}>
            <Icon glyph="delete" />
          </button>
        </div>
        {deleteModalOpen && (
          <DeleteSchemaModal
            handleDeleteSchema={handleDeleteSchema}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default SchemaCard;
