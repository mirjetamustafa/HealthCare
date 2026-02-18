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
    default:
      'flex items-center gap-2 px-4 border border-gray-300  text-gray-600',
    active: ' bg-[#0066CC] text-white hover:bg-blue-700',
    icon: 'bg-[#1F2937] text-white hover:bg-blue-700',
    book: 'bg-red-400 text-white hover:bg-red-500',
    register: 'bg-white text-blue-600 hover:bg-gray-100',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className} cursor-pointer p-2 rounded-md font-semibold`}
    >
      {children}
    </button>
  )
}

export default Button
