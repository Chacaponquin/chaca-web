import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { useQuery } from "../../../shared/hooks/useQuery"
import { API_ROUTES } from "../../../shared/routes/api/API_ROUTES"
import { APP_ROUTES } from "../../../shared/routes/app/APP_ROUTES"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { X } from "../../../shared/assets/icons"
import { ChacaArrowButton } from "../../../shared/components/ChacaButton"

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

  return (
    <div className='w-screen flex items-center lg:px-20 px-14 esm:px-5 lg:py-20 sm:py-12 esm:py-6'>
      <div className='flex flex-col w-full gap-5'>
        <div className='flex items-start justify-between w-full'>
          <div className='flex flex-col'>
            <div className='flex gap-x-[10px] lg:text-6xl text-5xl esm:text-4xl uppercase mb-2 flex-wrap '>
              <h1 className='font-fontExtraBold '>Preguntas</h1>
              <h1 className='font-fontExtraBold text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor whitespace-nowrap'>
                Frecuentes
              </h1>
            </div>

            <p className='text-gray-500 text-lg esm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, suscipit?
            </p>
          </div>

          <div className='lg:block hidden'>
            <Link to={APP_ROUTES.CONTACT_US} className='text-xl'>
              <ChacaArrowButton text={"New Question"} />
            </Link>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 grid-cols-1'>
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

  const iconClass = () => {
    return clsx("cursor-pointer transition-all duration-300 flex items-center", {
      "rotate-45": !open,
    })
  }

  const divClass = () => {
    return clsx("border-2 py-3 px-8 rounded-md flex flex-col h-max esm:px-6", {
      "border-secondColor": open,
    })
  }

  return (
    <motion.div className={divClass()}>
      <div className='flex justify-between w-full'>
        <h1 className='font-fontBold text-xl esm:text-lg'>{question}?</h1>
        <div className={iconClass()} onClick={() => setOpen(!open)}>
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
