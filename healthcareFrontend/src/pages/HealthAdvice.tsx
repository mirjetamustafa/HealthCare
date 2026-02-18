import HealthHero from '../components/healthAdvice/HealthHero'
import HealthadviceCard from '../components/shared/Cards/HealthadviceCard'
import HeartPuls from '../assets/heartPulse.svg?react'
import Brain from '../assets/brain.svg?react'
import Apple from '../assets/apple.svg?react'
import Moon from '../assets/moon.svg?react'
import Activity from '../assets/activity.svg?react'
import AI from '../components/healthAdvice/AI'

const HealthAdvice = () => {
  return (
    <div>
      <HealthHero />
      <div className="bg-gray-50 p-15">
        <h4 className="text-3xl font-bold text-center my-5">
          Health & Welllness Tips
        </h4>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mx-9 md:mx-20">
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
    </div>
  )
}

export default HealthAdvice
