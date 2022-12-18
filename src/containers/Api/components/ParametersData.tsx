import React from "react";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ARGUMENT_TYPE } from "../../../shared/constant/ARGUMENT_TYPE";
import { DataTransform } from "../../../shared/helpers/DataTransform";
import { ArgumentSchema } from "../../../shared/interfaces/options.interface";
import { v4 as uuid } from "uuid";

const ParametersData = ({
  args,
  openParams,
  onClick,
}: {
  args: ArgumentSchema[];
  openParams: boolean;
  onClick: () => void;
}) => {
  const cellTableClass = "font-fontCodeRegular px-4 py-2 text-base esm:text-sm";
  const tableHeaderClass =
    "text-left font-fontCodeBold px-4 py-2 text-base esm:text-sm";

  return (
    <SectionHeader open={openParams} onClick={onClick} header={"Parámetros"}>
      {openParams ? (
        <AnimatePresence>
          <motion.div
            transition={{ duration: 0.1 }}
            animate={{ height: "auto" }}
            initial={{ height: 0 }}
            className="w-full border-2 rounded-br-md rounded-bl-md"
          >
            <motion.table className="table-auto w-full">
              <motion.thead className="bg-slate-100">
                <motion.tr>
                  <motion.th className={tableHeaderClass}>Argument</motion.th>
                  <motion.th className={tableHeaderClass}>Type</motion.th>
                  <motion.th className={tableHeaderClass + " esm:hidden"}>
                    Description
                  </motion.th>
                </motion.tr>
              </motion.thead>

              <motion.tbody>
                {args.map((a, i) => (
                  <motion.tr key={uuid()}>
                    <motion.td className={cellTableClass}>
                      {a.argument}
                    </motion.td>
                    <motion.td
                      className={cellTableClass + " whitespace-nowrap"}
                    >
                      {a.inputType === ARGUMENT_TYPE.SELECT
                        ? DataTransform.getSelectValues(a.selectValues!)
                        : DataTransform.titlePipe(a.inputType)}
                    </motion.td>
                    <motion.td className={cellTableClass + " esm:hidden"}>
                      {a.description}
                    </motion.td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </motion.table>
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}
    </SectionHeader>
  );
};

export default ParametersData;
