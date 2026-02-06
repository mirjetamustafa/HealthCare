import type { ChangeEvent } from 'react'

type TextareaProps = {
  label?: string
  name: string
  placeholder?: string
  value?: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  rows?: number
}

const Textarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  rows,
}: TextareaProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor="description"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full p-2 border rounded-md outline-none text-xs focus:ring-1 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-200'}`}
      />
      {error && <p className="mt-1 text-sm text-red-500"> {error} </p>}
    </div>
  )
}

export default Textarea
