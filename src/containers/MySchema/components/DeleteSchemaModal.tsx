import React from "react";

const DeleteSchemaModal = ({
  handleDeleteSchema,
  handleCloseModal,
}: {
  handleDeleteSchema: () => void;
  handleCloseModal: () => void;
}) => {
  const buttonClass = "py-1 text-md px-4 rounded-md";

  return (
    <div className="flex items-center flex-wrap mt-2 justify-between">
      <h1 className="text-base font-fontBold mb-0">
        Seguro que quiere elminarlo?
      </h1>

      <div className="flex items-center">
        <button
          className={buttonClass + " bg-dangerColor text-white mr-2"}
          onClick={handleDeleteSchema}
        >
          Delete
        </button>
        <button
          className={buttonClass + " bg-white text-black"}
          onClick={handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteSchemaModal;
