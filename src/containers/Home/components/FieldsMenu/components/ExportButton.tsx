const ExportButton = ({
  handleExportAllDatasets,
}: {
  handleExportAllDatasets: () => void;
}) => {
  return (
    <div className="w-full px-3 py-2">
      <button
        className="px-3 py-1 text-white font-fontBold rounded-sm bg-secondColor text-lg w-full transition-all duration-300 hover:opacity-70"
        onClick={handleExportAllDatasets}
      >
        Export All
      </button>
    </div>
  );
};

export default ExportButton;
