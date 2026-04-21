import HealthHero from '../components/healthAdvice/HealthHero'
import HealthadviceCard from '../components/shared/Cards/HealthadviceCard'
import HeartPuls from '../assets/heartPulse.svg?react'
import Brain from '../assets/brain.svg?react'
import Apple from '../assets/apple.svg?react'
import Moon from '../assets/moon.svg?react'
import Activity from '../assets/activity.svg?react'
import AI from '../components/healthAdvice/AI'
import Accordion from '../components/shared/Accordion'
import { Link } from 'react-router'
import Button from '../components/shared/Button/Button'

const faqData = [
  {
    id: 1,
    question: 'How often should I get a health checkup?',
    answer:
      'Adults should have a general health checkup at least once a year. However, the frequency may vary based on your age, health conditions, and risk factors. Consult with your doctor for personalized recommendations.',
  },
  {
    id: 2,
    question: 'What vaccinations do I need as an adult?',
    answer:
      'Common adult vaccinations include annual flu shots, Tdap (tetanus, diphtheria, pertussis) every 10 years, and shingles vaccine for those over 50. COVID-19 boosters are also recommended. Your doctor can provide a personalized vaccination schedule.',
  },
  {
    id: 3,
    question: 'When should I see a doctor for a headache?',
    answer:
      'Seek immediate medical attention if you experience sudden severe headache, headache with fever, stiff neck, confusion, seizures, or vision problems. Also consult a doctor if headaches are frequent, worsen over time, or interfere with daily activities.',
  },
  {
    id: 4,
    question: 'How can I lower my blood pressure naturally?',
    answer:
      'Natural ways to lower blood pressure include reducing sodium intake, exercising regularly, maintaining a healthy weight, limiting alcohol, quitting smoking, managing stress, and eating a diet rich in fruits, vegetables, and whole grains.',
  },
  {
    id: 5,
    question: 'What are the warning signs of diabetes?',
    answer:
      'Warning signs include increased thirst and urination, unexplained weight loss, fatigue, blurred vision, slow-healing sores, and frequent infections. If you experience these symptoms, consult your doctor for blood sugar testing.',
  },
]

const HealthAdvice = () => {
  return (
    <section>
      <HealthHero />
      <div className="bg-gray-50 px-4 py-10 md:p-15">
        <h4 className="text-3xl font-bold text-gray-700 text-center my-5">
          Health & Welllness Tips
        </h4>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20">
          <HealthadviceCard
            title="Heart Health"
            status="Cardiology"
            description="Maintain cardiovascular health with regular exercise, a balanced diet low in saturated fats, and regular blood pressure monitoring."
            icon={HeartPuls}
          />
          <HealthadviceCard
            title="Mental Wellness"
            status="Mental Health"
            description="Practice mindfulness, maintain social connections, and don't hesitate to seek professional help when needed."
            icon={Brain}
          />
          <HealthadviceCard
            title="Nutrition"
            status="Diet"
            description="Eat a variety of fruits, vegetables, whole grains, and lean proteins. Stay hydrated with at least 8 glasses of water daily"
            icon={Apple}
          />

          <HealthadviceCard
            title="Sleep Hygiene"
            status="Lifestyle"
            description="Aim for 7-9 hours of quality sleep. Maintain a consistent sleep schedule and create a restful environment."
            icon={Moon}
          />
          <HealthadviceCard
            title="Physical Activity"
            status="Fitness"
            description="Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week."
            icon={Activity}
          />
        </div>
      </div>
      <AI />
      <div className="bg-gray-50 mt-12 md:mt-20 pb-12 md:pb-20 px-4 grid justify-items-center">
        <h4 className="text-3xl font-bold text-gray-800 text-center my-9">
          Frequently Asked Questions
        </h4>
        <Accordion items={faqData} />
      </div>

      <div className="flex flex-col justify-center items-center bg-[#0066CC] min-h-[300px] md:h-80 text-center gap-4 px-4 py-10">
        <h1 className="text-2xl md:text-3xl text-white font-bold">
          Need Personalized Medical Advice?
        </h1>
        <p className="text-blue-100 text-md md:text-lg max-w-2xl">
          Our team of experienced doctors is ready to help you with your health
          concerns.
        </p>
        <Link to="/bookAppointment">
          <Button
            variant="default"
            className="text-white hover:bg-stone-100 hover:text-[#0066CC] transition"
          >
            Book an Appointment
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HealthAdvice
