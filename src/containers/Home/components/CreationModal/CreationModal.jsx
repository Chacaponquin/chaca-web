import React, { useContext } from "react";
import OptionsButton from "../OptionsButton";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import { dataMapToJsonTree } from "./helpers/dataMapToJsonTree";
import JSONTreeCont from "../../../../shared/components/JsonTree/JSONTreeCont";
import CreationLoading from "./components/CreationLoading";
import ConfigFormSection from "./components/ConfigFormSection";

const CreationModal = ({
  handleSubmit,
  handleCloseCreateModal,
  loading,
  porcent,
}) => {
  const { datasets, fieldsOptions } = useContext(DatasetsContext);

  return (
    <div className="fixed bg-black/50 w-screen min-h-screen top-0 left-0 flex items-center justify-center z-50">
      {loading && <CreationLoading porcent={porcent} />}

      <div className="bg-white py-6 px-10 rounded-md w-[90%] min-h-[95%] flex flex-col gap-5 esm:w-[95%]">
        <div className="w-full flex esm:flex-col-reverse gap-10 esm:gap-5">
          <div className="w-[60%] esm:w-full flex flex-col">
            <h1 className="text-3xl font-fontBold esm:text-2xl">
              Example Data:
            </h1>

            <JSONTreeCont data={dataMapToJsonTree(datasets, fieldsOptions)} />
          </div>

          <ConfigFormSection />
        </div>

        <OptionsButton
          handleCancel={handleCloseCreateModal}
          handleSubmit={handleSubmit}
          submitText={"Create"}
        />
      </div>
    </div>
  );
};

export default CreationModal;
