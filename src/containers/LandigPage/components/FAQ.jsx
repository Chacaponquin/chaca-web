import React from "react";
import { useState } from "react";
import Icon from "supercons";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useQuery } from "../../../shared/hooks/useQuery";
import { apiRoutes } from "../../../shared/routes/api/apiRoutes";
import { appRoutes } from "../../../shared/routes/app/appRoutes";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [questions, setQuestions] = useState([1, 2, 3, 4, 5, 6]);

  useQuery({
    url: apiRoutes.GET_FAQ,
    onCompleted: (data) => {
      setQuestions(data.faq);
    },
    onError: () => {},
  });

  return (
    <div className="w-screen flex items-center lg:px-20 px-14 esm:px-5 lg:py-20 sm:py-12 esm:py-6">
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col">
            <div className="flex gap-[10px] lg:text-6xl text-5xl esm:text-4xl uppercase mb-2">
              <h1 className="font-fontExtraBold ">Preguntas</h1>
              <h1 className="font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap">
                Frecuentes
              </h1>
            </div>

            <p className="text-gray-500 text-lg esm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              suscipit?
            </p>
          </div>

          <div className="lg:block hidden">
            <Link
              to={appRoutes.CONTACT_US}
              className="flex items-center transition-all duration-300 bg-white rounded-md px-10 py-2 text-thirdColor border-2 border-thirdColor font-fontBold text-xl hover:bg-thirdColor hover:text-white"
            >
              New Question
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          {questions.map((el, i) => (
            <QuestionCard key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ answer, question }) => {
  const [open, setOpen] = useState(false);

  const iconClass = () => {
    return clsx("cursor-pointer transition-all duration-300", {
      "rotate-45": !open,
    });
  };

  const divClass = () => {
    return clsx("border-2 py-3 px-8 rounded-md flex flex-col h-max esm:px-6", {
      "border-secondColor": open,
    });
  };

  return (
    <motion.div className={divClass()}>
      <div className="flex justify-between w-full">
        <h1 className="font-fontBold text-xl esm:text-lg">{question}?</h1>
        <div className={iconClass()} onClick={() => setOpen(!open)}>
          <Icon glyph="view-close" />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className=""
            transition={{ type: "spring", duration: 0.3 }}
            animate={{ height: "auto", opacity: 1 }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className="text-gray-500 text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
