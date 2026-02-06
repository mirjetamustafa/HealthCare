type InputProps = {
  label?: string
  name: string
  type?: 'text' | 'email' | 'phone' | 'search'
  placeholder?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  icon?: React.ReactNode
}

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  icon,
}: InputProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {' '}
          {label}{' '}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-2.5 text-gray-400">
            {' '}
            {icon}{' '}
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 text-xs border rounded-md outline-none focus:ring-1 focus:ring-blue-300 ${icon ? 'pl-10' : ''} ${error ? 'border-red-500' : 'border-gray-200'}`}
        />
      </div>
    </div>
  )
}

export default Input
