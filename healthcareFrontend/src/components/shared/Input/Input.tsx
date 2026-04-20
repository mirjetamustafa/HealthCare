type InputProps = {
  label?: string
  name: string
  type?: 'text' | 'email' | 'search' | 'date' | 'number'
  placeholder?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  icon?: React.ReactNode
  className?: string
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
  className,
}: InputProps) => {
  const id = name
  return (
    <div className={`mb-4 ${className ?? ''}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {' '}
          {label}{' '}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-3 text-gray-400"> {icon} </span>
        )}
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 text-sm border rounded-md bg-white outline-none focus:ring-1 focus:ring-blue-300 ${icon ? 'pl-10' : ''} ${error ? 'border-red-500' : 'border-gray-200'}`}
        />
      </div>
    </div>
  )
}

export default Input
