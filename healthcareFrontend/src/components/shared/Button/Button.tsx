type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  variant:
    | 'default'
    | 'active'
    | 'icon'
    | 'book'
    | 'register'
    | 'tab'
    | 'cancel'
    | 'btn'
  className?: string
}

const Button = ({
  children,
  type,
  disabled,
  variant,
  className = '',
  onClick,
}: ButtonProps) => {
  const variants: Record<string, string> = {
    default:
      'flex justify-center items-center gap-2 px-4 border border-gray-300  text-gray-600',
    active:
      ' bg-[#0066CC] flex justify-center items-center text-white hover:bg-blue-700',
    icon: 'bg-[#1F2937] text-white hover:bg-blue-700',
    book: 'bg-red-400 text-white hover:bg-red-500',
    register: 'bg-white text-blue-600 hover:bg-gray-100',
    tab: 'flex items-center gap-2 text-sm rounded-none',
    cancel: 'border border-red-200 text-red-600 text-sm px-5 hover:bg-red-50',
    btn: '',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]}  ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className} cursor-pointer p-2 rounded-md font-semibold`}
    >
      {children}
    </button>
  )
}

export default Button
