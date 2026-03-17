export type Option = {
  label: string
  value: string
}

type SelectProps = {
  label?: string
  value: string
  name: string
  onChange: (value: string) => void
  options: Option[]
  error?: string
  disabled?: boolean
  labelPosition?: 'block' | 'inline'
}

const Select = ({
  label,
  value,
  name,
  onChange,
  options,
  error,
  disabled,
  labelPosition = 'block',
}: SelectProps) => {
  const id = name
  return (
    <div
      className={`mb-4 ${
        labelPosition === 'inline' ? 'flex items-center' : 'flex flex-col'
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium text-gray-700 ${
            labelPosition === 'block' ? 'mb-1' : ''
          }`}
        >
          {label}
        </label>
      )}

      <select
        id={id}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full p-2 border text-xs rounded-md bg-white outline-none focus:ring-1 focus:ring-blue-300 ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}  ${error ? 'border-red-500' : 'border-gray-200'}`}
      >
        <option value="" key="placeholder" disabled>
          {label ? `Select ${label}` : 'Select option'}
        </option>
        {options.map((option, index) => (
          <option
            key={option.value ? option.value.toString() : `option-${index}`}
            value={option.value}
            className="capitalize"
          >
            {' '}
            {option.label}{' '}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500"> {error} </p>}
    </div>
  )
}

export default Select
