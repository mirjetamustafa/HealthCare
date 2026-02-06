type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant: 'default' | 'active' | 'icon' | 'book' | 'register'
  className?: string
}

const Button = ({
  children,
  type,
  variant,
  className = '',
  onClick,
}: ButtonProps) => {
  const variants: Record<string, string> = {
    default: 'border border-gray-400 hover:bg-gray-50',
    active: 'w-full bg-blue-600 text-white hover:bg-blue-700',
    icon: 'bg-[#1F2937] text-white hover:bg-blue-700',
    book: 'bg-red-400 text-white hover:bg-red-500',
    register: 'bg-white text-blue-600 hover:bg-gray-50',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className} cursor-pointer p-2 rounded-md text-sm font-semibold`}
    >
      {children}
    </button>
  )
}

export default Button
