const baseClassName = "px-5 py-3 text-sm rounded-xl  transition-pop"

const variantClassName = {
  primary: "bg-gradient-brand text-white hover:bg-blue-600 shadow-glow",
  secondary: "bg-bg2 border border-line text-tx",
}

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  isIconButton = false,
}: {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: keyof typeof variantClassName
  isIconButton?: boolean
}) => {
  const className = `${baseClassName} ${variantClassName[variant]}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        onClick={onClick}
        className={className + (isIconButton ? " px-4!" : "")}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={className + (isIconButton ? " px-4!" : "")}
    >
      {children}
    </button>
  )
}

export default Button
