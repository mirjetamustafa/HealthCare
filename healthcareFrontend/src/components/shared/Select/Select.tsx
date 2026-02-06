type Option = {
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
}

const Select = ({
  label,
  value,
  name,
  onChange,
  options,
  error,
}: SelectProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="blocmb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2 border text-xs rounded-md bg-white outline-none focus:ring-1 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-200'}`}
      >
        <option value="" key="placeholder" disabled>
          Select Category
        </option>
        {options.map((option, index) => (
          <option
            key={option.value ? option.value.toString() : `option-${index}`}
            value={option.value}
          >
            {' '}
            {option.label}{' '}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-505"> {error} </p>}
    </div>
  )
}

export default Select
