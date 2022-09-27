import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import clsx from "clsx";
import { UserContext } from "../../../../shared/context/UserContext";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ACTION_TYPES";
import { motion } from "framer-motion";
import { AppConfigContext } from "../../../../shared/context/AppConfigContext";
import { v4 as uuid } from "uuid";

const DatasetBar = ({
  handleOpenCreationModal,
}: {
  handleOpenCreationModal: () => void;
}) => {
  const { datasets, handleSelectDataset, selectedDataset, datasetDispatch } =
    useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);
  const { noUserLimits, fieldsOptions } = useContext(AppConfigContext);

  const divClass = (id: string) => {
    return clsx(
      "whitespace-nowrap py-3 px-10 text-xl transition-all duration-300 hover:scale-105 rounded-md font-fontBold !w-full",
      { "bg-slate-200 text-black": selectedDataset.id !== id },
      { "bg-secondColor text-white": selectedDataset.id === id }
    );
  };

  const isPosibleCreate =
    datasets.length <
    (actualUser ? actualUser.limitDatasets : noUserLimits.LIMIT_DATASETS);

  return (
    <div className="w-max lg:flex h-max hidden px-6">
      <div className="sticky w-max flex items-center top-0 flex-col pb-5">
        <div className="flex lg:justify-end justify-center w-full mb-4">
          <motion.button
            className="flex gap-2 items-center py-2 px-5 rounded-full bg-slate-200"
            onClick={() =>
              datasetDispatch({
                type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
                payload: { options: fieldsOptions },
              })
            }
            layout
            transition={{ layout: { duration: 0.3 } }}
            disabled={isPosibleCreate ? false : true}
          >
            <div className="w-max">
              <Icon
                glyph={isPosibleCreate ? "event-add" : "private"}
                size={28}
              />
            </div>
            {isPosibleCreate && (
              <motion.p className="mb-0">New Dataset</motion.p>
            )}
          </motion.button>
        </div>

        <div className="flex flex-col gap-3 h-[80%] top-0 w-full">
          {datasets.map((d, i) => (
            <button
              key={uuid()}
              className={divClass(d.id)}
              onClick={() => handleSelectDataset(d.id)}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="relative bottom-0 flex justify-center w-full mt-20">
          <button
            className="bg-principal-bg text-white font-fontBold text-2xl px-5 py-2 rounded-md w-full"
            onClick={handleOpenCreationModal}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatasetBar;
