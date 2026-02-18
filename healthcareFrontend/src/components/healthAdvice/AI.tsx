import Sparkles from '../../assets/sparkles.svg?react'
import Send from '../../assets/send.svg?react'
import Chat from '../../assets/chat.svg?react'
import Info from '../../assets/info.svg?react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'

const AI = () => {
  return (
    <div className="flex flex-col items-center m-9 text-center">
      <p className="bg-blue-50 text-[#0066CC] text-sm font-semibold flex items-center gap-2 rounded-full py-2 px-4 mt-9">
        <Sparkles className="w-4 h-4 mt-0.5" />
        AI-Powered
      </p>
      <h1 className="text-3xl text-gray-800 font-bold mt-5">
        Health Assistant
      </h1>
      <p className="text-gray-600 mt-2">
        Ask questions about symptoms, wellness tips, or general health
        information
      </p>

      {/* AI chat */}
      <div className="w-full max-w-4xl mx-auto mt-10 bg-gray-50 p-6 rounded-2xl border border-gray-200">
        {/* Messages */}
        <div className="flex flex-col gap-6">
          {/* Assistant message */}
          <div className="flex text-left">
            <div className="bg-gray-100 p-5 rounded-2xl max-w-xl">
              <p className="font-semibold text-xs flex items-center gap-2 text-[#00A896] mb-2">
                <Chat className="w-4 h-4" /> MediCare Assistant
              </p>
              <p className="text-sm">
                Hello! I'm your MediCare health assistant. I can provide general
                health information and guidance. How can I help you today?
              </p>
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl max-w-xs">
              hello
            </div>
          </div>

          {/* Assistant second message */}
          <div className="flex text-left">
            <div className="bg-gray-100 p-5 rounded-2xl max-w-xl">
              <p className="font-semibold text-xs flex items-center gap-2 text-[#00A896] mb-2">
                <Chat className="w-4 h-4" /> MediCare Assistant
              </p>
              <p className="text-sm">
                Thank you for your question. While I can provide general health
                information, I recommend scheduling an appointment with one of
                our specialists for personalized medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* input */}
        <form className="mt-8 flex items-center gap-3">
          <div className="w-full mt-3">
            {' '}
            <Input type="text" placeholder="Ask a health question" />
          </div>

          <Button variant="active">
            <Send className="w-5 h-5" />
          </Button>
        </form>
        {/* Disclaimer */}
        <div className="flex items-center gap-2 mt-6 bg-yellow-50 text-yellow-700 p-4 rounded-xl text-sm">
          <Info className="w-4 h-4" /> This AI assistant provides general health
          information only and is not a substitute for professional medical
          advice.
        </div>
      </div>
    </div>
  )
}

export default AI
