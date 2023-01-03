import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../../shared/routes/app/APP_ROUTES";
import { axiosInstance } from "../../../shared/routes/api/API_ROUTES";
import LoaderContainer from "../../../shared/components/Loader/LoaderContainer";
import clsx from "clsx";
import { SubOption } from "../../../shared/interfaces/options.interface";
import { toast } from "react-toastify";
import { DataTransform } from "../../../shared/helpers/DataTransform";
import ExampleCode from "../../../shared/components/ExampleCode/ExampleCode";
import { FieldArgument } from "../../../shared/interfaces/datasets.interface";
import { v4 as uuid } from "uuid";

const QueryContainer = ({ field }: { field: SubOption }) => {
  const location = useLocation();
  const [allArguments, setAllArguments] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeArguments = ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => {
    setAllArguments({ ...allArguments, [field]: value });
  };

  const codeConstructor = () => {
    let returnString = "";

    const uno = `axios.get("${field.route}",  {\n`;
    const dos = `   headers: {\n`;
    const tres = `      authorization: /*your token*/\n`;
    const cuatro = `   },\n`;
    const quinto = `   params: {\n`;

    returnString += uno + dos + tres + cuatro + quinto;

    const values = Object.values(allArguments);
    for (let i = 0; i < values.length; i++) {
      let init = `      ${Object.keys(allArguments)[i]}: ${values[i]}`;

      if (i === values.length - 1) init += "\n";
      else init += `,\n`;

      returnString += init;
    }

    const sextPrev = `   }\n`;
    const sext = `})\n`;

    returnString += sextPrev;
    returnString += sext;
    return returnString;
  };

  const buttonSectionClass = () => {
    return clsx(
      "flex w-full border-t-2 gap-3 py-2 px-4 items-center",
      { "justify-between": result !== undefined && result !== null },
      { "justify-end": !(result !== undefined && result !== null) }
    );
  };

  const handleSubmit = () => {
    setLoading(true);
    axiosInstance
      .get(field.route, { params: allArguments })
      .then(({ data }) => {
        setResult(data);
      })
      .catch((err) => {
        if (err?.response?.data?.error) toast.error(err.error);
        else
          toast.error("Hubo un error", {
            autoClose: 5000,
            hideProgressBar: true,
          });
      })
      .finally(() => setLoading(false));
  };

  return (
    <AnimatePresence>
      {field && location.pathname === APP_ROUTES.API && (
        <motion.div
          className="w-full border-2 rounded-br-md rounded-bl-md"
          transition={{ duration: 0.1 }}
          animate={{ height: "auto" }}
          initial={{ height: 0 }}
          exit={{ height: 0 }}
        >
          <motion.div className="w-full">
            <motion.div className="flex xl:flex-row w-full flex-col">
              <div className="flex xl:w-[600px] w-full">
                <ExampleCode code={codeConstructor()} />
              </div>

              {field.arguments.length > 0 && (
                <motion.div className="bg-white flex flex-col py-4 lg:px-2 px-4 overflow-auto w-full gap-3">
                  <div className="lg:flex lg:flex-col gap-3 grid grid-cols-2 esm:grid-cols-1">
                    {field.arguments.map((arg, i) => (
                      <div key={uuid()} className="flex gap-2 items-center">
                        <p>{DataTransform.titlePipe(arg.argument)}:</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <motion.div className={buttonSectionClass()}>
            {result !== null && result !== undefined && (
              <div className="flex items-center gap-1">
                <p className="mb-0 px-3 py-2 text-black rounded-md bg-slate-200 font-fontCodeBold text-sm esm:px-2 esm:py-1 ">
                  {DataTransform.showDataTransform(result)}
                </p>
              </div>
            )}
            <LoaderContainer loading={loading} className="w-[30px]">
              <button
                className="transition-all duration-300 py-2 px-4 text-base text-white font-fontBold bg-secondColor rounded-md hover:bg-secondColor/60 esm:px-3 esm:py-1 "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </LoaderContainer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QueryContainer;
