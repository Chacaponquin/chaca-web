import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";

interface OptionsButtonProps {
  handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  handleCancel: () => void;
  submitText: string;
}

const OptionsButton = ({
  submitText,
  handleSubmit,
  handleCancel,
  loading = false,
}: OptionsButtonProps) => {
  return (
    <div className="w-full flex justify-end gap-3 esm:justify-center items-center">
      <LoaderContainer className="w-[40px] mr-5" loading={loading}>
        <button
          className="px-8 text-xl py-2 bg-principal-bg text-white font-fontBold rounded-md transition-all duration-300 hover:opacity-70"
          onClick={handleSubmit}
        >
          {submitText}
        </button>
      </LoaderContainer>

      <button
        className="px-8 text-xl py-2 bg-slate-200 text-black font-fontBold rounded-md"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default OptionsButton;
