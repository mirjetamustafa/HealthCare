import Activity from '../../assets/activity.svg?react'

type Variant = 'success' | 'info'

type HealthItemProps = {
  label: string
  value: string
  variant?: Variant
}

const styles: Record<Variant, string> = {
  success: 'bg-green-50 text-green-600',
  info: 'bg-blue-50 text-blue-600',
}

const HealthItem = ({ label, value, variant = 'success' }: HealthItemProps) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl ${styles[variant]}`}
    >
      <div className="flex items-center gap-3">
        <Activity className="w-5 h-5 " />
        <span className="font-medium text-gray-800">{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  )
}

export default HealthItem
