import React from "react";
import { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import { AnimatePresence, motion } from "framer-motion";
import FieldInputArgument from "../../../../../../shared/components/FieldInputArgument/FieldInputArgument";
import { useLocation } from "react-router-dom";
import { appRoutes } from "../../../../../../shared/routes/app/appRoutes";
import { titlePipe } from "../../../../../../shared/helpers/titlePipe";
import { axiosInstance } from "../../../../../../shared/routes/api/apiRoutes";
import LoaderContainer from "../../../../../../shared/components/Loader/LoaderContainer";
import clsx from "clsx";
import { showDataTransform } from "../../../../helpers/showDataTransform";
import { toast } from "react-toastify";

const QueryContainer = ({ field }) => {
  const location = useLocation();
  const [allArguments, setAllArguments] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeArguments = (data) => {
    setAllArguments({ ...allArguments, [data.field]: data.value });
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
            autoClose: true,
            hideProgressBar: true,
          });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <AnimatePresence>
        {field && location.pathname === appRoutes.API && (
          <motion.div
            className="w-full border-2 rounded-br-md rounded-bl-md"
            transition={{ duration: 0.1 }}
            animate={{ height: "auto" }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
          >
            <motion.div>
              <motion.div className="flex lg:flex-row w-full flex-col">
                <SyntaxHighlighter
                  className="z-50 w-full py-4 px-6 code-cont text-sm !bg-white esm:px-3 esm:py-2 esm:text-xs"
                  language={languages["javascript"]}
                  style={themes["atomOneLight"]}
                >
                  {codeConstructor()}
                </SyntaxHighlighter>

                {field.arguments.length > 0 && (
                  <motion.div className="bg-white flex flex-col p-4 lg:w-[300px] overflow-auto w-full gap-3">
                    <div className="lg:flex lg:flex-col gap-3 grid grid-cols-2 esm:grid-cols-1">
                      {field.arguments.map((arg, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <p>{titlePipe(arg.argument)}:</p>
                          <FieldInputArgument
                            allArguments={allArguments}
                            arg={arg}
                            handleChangeArguments={handleChangeArguments}
                          />
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
                    {showDataTransform(result)}
                  </p>
                </div>
              )}
              <LoaderContainer loading={loading} className="w-[30px]">
                <button
                  className="transition-all duration-300 py-2 px-4 text-base text-white font-fontBold bg-principalColor rounded-md hover:bg-principalColor/60 esm:px-3 esm:py-1 "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </LoaderContainer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QueryContainer;
