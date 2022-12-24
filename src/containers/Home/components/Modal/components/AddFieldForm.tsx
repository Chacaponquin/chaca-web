import { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { AppConfigContext } from "../../../../../shared/context/AppConfigContext";
import { NodeInfo } from "../../../../../shared/interfaces/tree.interface";
import { SingleValueDataType } from "../../../../../shared/interfaces/datasets.interface";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import { Slider } from "primereact/slider";
import { InputNumber } from "primereact/inputnumber";
import { DATASETS_ACTIONS } from "../../../constants/ACTION_TYPES";
import { ModalAddFieldProps } from "../../../interfaces/modal.interface";
import ModalButtons from "./shared/components/ModalButtons";
import ModalTitle from "./shared/components/ModalTitle";

const AddFieldForm = ({
  props,
  handleCloseModal,
}: {
  props: ModalAddFieldProps;
  handleCloseModal: () => void;
}) => {
  const { datasetDispatch, handleDeleteSelectField } =
    useContext(DatasetsContext);
  const { schemas } = useContext(AppConfigContext);

  const [name, setName] = useState("");
  const [field, setField] = useState<NodeInfo<SingleValueDataType>>({
    dataType: {
      fieldType: {
        args: {},
        parent: schemas[0].parent,
        type: schemas[0].options[1].name,
      },
      type: DATA_TYPES.SINGLE_VALUE,
    },
    isArray: null,
    isPosibleNull: 0,
  });

  const handleAddField = () => {
    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldName: name,
        fieldInfo: field,
        location: props.location,
      },
    });

    handleDeleteSelectField();
    handleCloseModal();
  };

  return (
    <div className="flex flex-col w-full">
      <ModalTitle titleText="New Field" handleCloseModal={handleCloseModal} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="" className="font-fontBold text-lg">
            Field name:
          </label>
          <InputText
            className="w-full"
            placeholder="Field name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="font-fontBold text-lg">
            Options:
          </label>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Checkbox
                  checked={field.isArray ? true : false}
                  onChange={(e) => {
                    setField({
                      ...field,
                      isArray: e.checked ? { min: 0, max: 10 } : null,
                    });
                  }}
                />
                <p className="mb-0">Is Array</p>
              </div>

              {field.isArray !== null && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p className="mb-0">Min:</p>
                    <InputNumber
                      className="w-[60px] !text-sm"
                      value={field.isArray.min}
                      min={0}
                      max={field.isArray.max}
                      step={1}
                      onChange={(e) => {
                        setField({
                          ...field,
                          isArray: {
                            max: field.isArray!.max,
                            min: e.value ? e.value : field.isArray!.min,
                          },
                        });
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="mb-0">Max:</p>
                    <InputNumber
                      className="w-[60px] !text-sm"
                      value={field.isArray.max}
                      min={field.isArray.min}
                      max={1000}
                      step={1}
                      onChange={(e) => {
                        setField({
                          ...field,
                          isArray: {
                            min: field.isArray!.min,
                            max: e.value ? e.value : field.isArray!.max,
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Checkbox
                  checked={field.isPosibleNull > 0 ? true : false}
                  onChange={(e) => {
                    setField({ ...field, isPosibleNull: e.checked ? 50 : 0 });
                  }}
                />
                <p className="mb-0">Possible null</p>
              </div>

              {field.isPosibleNull > 0 && (
                <div>
                  <Slider
                    value={field.isPosibleNull}
                    orientation="horizontal"
                    min={0}
                    max={100}
                    step={1}
                    className="w-[200px]"
                    onChange={(e) => {
                      setField({
                        ...field,
                        isPosibleNull: Number(e.value.toString()),
                      });
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ModalButtons
        nextText="Add Field"
        handleCancel={handleCloseModal}
        handleNext={handleAddField}
      />
    </div>
  );
};

export default AddFieldForm;
