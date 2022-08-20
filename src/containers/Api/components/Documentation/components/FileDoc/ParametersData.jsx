import React from "react";
import { FIELDS_INPUT_TYPES } from "../../../../../../shared/helpers/datasetsUtils";
import { titlePipe } from "../../../../../../shared/helpers/titlePipe";
import { getSelectValues } from "../../../../helpers/showDataTransform";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const ParametersData = ({ args, openParams, onClick }) => {
  const cellTableClass = "font-fontCodeRegular px-4 py-2 text-base esm:text-sm";
  const tableHeaderClass =
    "text-left font-fontCodeBold px-4 py-2 text-base esm:text-sm";

  return (
    <SectionHeader open={openParams} onClick={onClick} header={"Parámetros"}>
      {openParams && (
        <AnimatePresence>
          <motion.div
            transition={{ duration: 0.1 }}
            animate={{ height: "auto" }}
            initial={{ height: 0 }}
            className="w-full border-2 rounded-br-md rounded-bl-md"
          >
            <motion.table className="table-fixed w-full">
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
                  <motion.tr key={i}>
                    <motion.td className={cellTableClass}>
                      {a.argument}
                    </motion.td>
                    <motion.td
                      className={cellTableClass + " whitespace-nowrap"}
                    >
                      {a.inputType === FIELDS_INPUT_TYPES.SELECT
                        ? getSelectValues(a.selectValues)
                        : titlePipe(a.inputType)}
                    </motion.td>
                    <motion.td className={cellTableClass + " esm:hidden"}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, dignissimos.
                    </motion.td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </motion.table>
          </motion.div>
        </AnimatePresence>
      )}
    </SectionHeader>
  );
};

export default ParametersData;
