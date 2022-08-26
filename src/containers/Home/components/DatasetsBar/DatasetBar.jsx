import React from "react";
import { useContext } from "react";
import { DatasetsContext } from "../../../../shared/context/DatasetsContext";
import clsx from "clsx";
import Icon from "supercons";
import { UserContext } from "../../../../shared/context/UserContext";
import { DATASETS_ACTIONS } from "../../helpers/reducer/ActionTypes";
import { motion } from "framer-motion";

const DatasetBar = ({ handleOpenCreationModal }) => {
  const {
    datasets,
    handleSelectDataset,
    selectedDataset,
    noUserLimits,
    dispatch,
  } = useContext(DatasetsContext);
  const { actualUser } = useContext(UserContext);

  const divClass = (id) => {
    return clsx(
      "whitespace-nowrap py-3 px-10 text-xl transition-all duration-300 hover:scale-105 rounded-md font-fontBold",
      { "bg-slate-200 text-black": selectedDataset.id !== id },
      { "bg-secondColor text-white": selectedDataset.id === id }
    );
  };

  const isPosibleCreate =
    datasets.length <
    (actualUser ? actualUser.limitDatasets : noUserLimits.LIMIT_DATASETS);

  return (
    <div className="w-max lg:flex h-full hidden px-6">
      <div className="sticky w-max flex items-center top-0 flex-col pb-5">
        <div className="flex lg:justify-end justify-center w-full mb-4">
          <motion.button
            className="flex gap-2 items-center py-2 px-5 rounded-full bg-slate-200"
            onClick={() =>
              dispatch({ type: DATASETS_ACTIONS.CREATE_NEW_DATASET })
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

        <div className="flex flex-col gap-3 h-[80%] top-0">
          {datasets.map((d, i) => (
            <button
              key={i}
              className={divClass(d.id)}
              onClick={() => handleSelectDataset(d.id)}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="relative bottom-0 flex justify-center w-full">
          <button
            className="bg-principalColor text-white font-fontBold text-2xl px-5 py-2 rounded-md w-full"
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
