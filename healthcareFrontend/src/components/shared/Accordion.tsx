import { useState } from 'react'
import ArrowDown from '../../assets/arrowDown.svg?react'
import ArrowUp from '../../assets/arrowUp.svg?react'

type AccordionItem = {
  id: number
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg p-4 cursor-pointer bg-white shadow-sm"
        >
          {/* Header */}
          <div
            onClick={() => toggle(item.id)}
            className="flex justify-between items-center font-semibold"
          >
            <span>{item.question}</span>
            <span className="text-gray-500">
              {openId === item.id ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
            </span>
          </div>

          {/* Content */}

          {openId === item.id && (
            <p className="mt-3 text-gray-600 leadiing-relaxed">
              {' '}
              {item.answer}{' '}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
