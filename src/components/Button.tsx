const baseClassName = "px-5 py-3 text-sm rounded-xl transition-colors"

const variantClassName = {
  primary: "bg-gradient-brand text-white hover:bg-blue-600 shadow-glow",
  secundary: "bg-bg border border-line text-tx",
}

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
}: {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: keyof typeof variantClassName
}) => {
  const className = `${baseClassName} ${variantClassName[variant]}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
