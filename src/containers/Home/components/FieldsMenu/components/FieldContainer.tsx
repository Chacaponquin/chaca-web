import { useContext, Fragment, useState } from "react";
import { ArrowRight, Config } from "../../../../../shared/assets/icons";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import {
  DatasetField,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";
import clsx from "clsx";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import FieldConfigMenu from "./FieldConfigMenu";
import { ModalProps } from "../../../interfaces/modal.interface";

const Point = () => {
  return <div className="bg-principal-bg w-[7px] h-[7px] rounded-full"></div>;
};

const FieldContainer = ({
  margin,
  field,
  handleOpenModal,
}: {
  field: DatasetField<FieldDataType>;
  margin: number;
  handleOpenModal: (props: ModalProps) => void;
}) => {
  const { selectField, handleSelectField, selectedDataset } =
    useContext(DatasetsContext);

  const [openMenu, setOpenMenu] = useState(false);

  const [subFieldsOpen, setSubFieldsOpen] = useState(false);

  const divClass = () => {
    return clsx(
      "w-full flex items-center cursor-pointer justify-between py-1 transition-all duration-300 hover:bg-slate-100 px-2",
      {
        "bg-slate-100": selectField && selectField.id === field.id,
      }
    );
  };

  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (!(field.dataType.type === DATA_TYPES.MIXED))
      handleSelectField(selectedDataset.id, field.id);
  };

  return (
    <div className="flex flex-col w-full" onClick={handleSelect}>
      <div
        className={"flex items-center justify-between"}
        style={{ paddingLeft: `${margin}px` }}
      >
        <div className={divClass()}>
          <div className="flex items-center">
            {field.dataType.type === DATA_TYPES.MIXED ? (
              <button
                style={{
                  transform: subFieldsOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
                onClick={() => setSubFieldsOpen(!subFieldsOpen)}
              >
                <ArrowRight size={18} />
              </button>
            ) : (
              <div className="pl-[5px]">
                <Point />
              </div>
            )}

            <p className="ml-3">{field.name}</p>
          </div>

          <div className="flex flex-col">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(!openMenu);
              }}
            >
              <Config size={18} />
              {openMenu && (
                <FieldConfigMenu
                  handleOpenModal={handleOpenModal}
                  field={field}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {field.dataType.type === DATA_TYPES.MIXED && subFieldsOpen && (
        <Fragment>
          {field.dataType.object.map((s) => (
            <FieldContainer
              field={s}
              margin={margin + 12}
              key={s.id}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default FieldContainer;
