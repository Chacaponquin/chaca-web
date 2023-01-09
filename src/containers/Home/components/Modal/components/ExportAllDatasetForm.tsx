import { ModalExportAllDatasets } from "../../../interfaces/modal.interface";
import ExportForm from "../shared/components/ExportForm";
import ModalButtons from "../shared/components/ModalButtons";
import ModalTitle from "../shared/components/ModalTitle";

const ExportAllDatasetForm = ({
  props,
  handleCloseModal,
  handleCreateAllDatasets,
}: {
  handleCloseModal: () => void;
  props: ModalExportAllDatasets;
  handleCreateAllDatasets: () => void;
}) => {
  return (
    <div className="flex flex-col w-full">
      <ModalTitle
        handleCloseModal={handleCloseModal}
        titleText="Export All Datasets"
      />

      <ExportForm />

      <ModalButtons
        nextText="Export Datasets"
        handleCancel={handleCloseModal}
        handleNext={handleCreateAllDatasets}
        type="edit"
      />
    </div>
  );
};

export default ExportAllDatasetForm;
