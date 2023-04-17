import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { API_ROUTES } from "@modules/shared/routes"
import { v4 as uuid } from "uuid"
import { X } from "@modules/shared/assets/icons"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { useQuery } from "@modules/shared/modules/http/hooks"

interface IFAQ {
  question: string
  answer: string
}

const FAQ = () => {
  const [questions, setQuestions] = useState<IFAQ[]>([])

  useQuery<IFAQ[]>({
    url: API_ROUTES.GET_FAQ,
    onCompleted: (data) => {
      setQuestions(data)
    },
  })

  const UI_TEXT = useLanguage({
    FIRST_TEXT: { en: "Frecuent", es: "Preguntas" },
    GRADIENT_TEXT: { en: "Questions", es: "Frecuentes" },
    NEW_QUESTION: { en: "new question", es: "pregunta" },
  })

  return (
    <div className='w-full px-10 flex items-center justify-center py-20 esm:py-10'>
      <div className='flex flex-col gap-y-5 esm:gap-y-1 w-[1000px]'>
        <div className='flex gap-x-[10px] lg:text-6xl text-5xl esm:text-4xl uppercase mb-2 flex-wrap'>
          <h1 className='font-fontTitle'>{UI_TEXT.FIRST_TEXT}</h1>
          <h1 className='font-fontTitle text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap'>
            {UI_TEXT.GRADIENT_TEXT}
          </h1>
        </div>

        <div className='grid gap-4 grid-cols-1'>
          {questions.map((el) => (
            <QuestionCard key={uuid()} {...el} />
          ))}
        </div>
      </div>
    </div>
  )
}

const QuestionCard = ({ answer, question }: { answer: string; question: string }) => {
  const [open, setOpen] = useState(false)

  const iconClass = clsx("cursor-pointer transition-all duration-300 flex items-center", {
    "rotate-45": !open,
  })

  const divClass = clsx("border-2 py-3 px-8 rounded-sm flex flex-col h-max esm:px-6", {
    "border-secondColor": open,
    "border-gray-300": !open,
  })

  return (
    <motion.div className={divClass}>
      <div className='flex justify-between w-full'>
        <h1 className='font-fontBold text-xl esm:text-lg'>{question}?</h1>
        <div className={iconClass} onClick={() => setOpen(!open)}>
          <X size={20} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className=''
            transition={{ type: "spring", duration: 0.3 }}
            animate={{ height: "auto", opacity: 1 }}
            initial={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className='text-gray-500 text-base'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FAQ
