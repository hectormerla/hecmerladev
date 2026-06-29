const baseClassName = "px-5 py-3 text-sm rounded-xl  transition-pop"

const variantClassName = {
  primary: "bg-gradient-brand text-white hover:bg-blue-600 shadow-glow",
  secondary: "bg-bg2 border border-line text-tx",
}

const Button = ({
  children,
  className,
  onClick,
  href,
  target,
  isBlank,
  variant = "primary",
  isIconButton = false,
  ariaLabel = "",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  isBlank?: boolean
  variant?: keyof typeof variantClassName
  isIconButton?: boolean
  ariaLabel?: string
}) => {
  const mergedClassName = `${baseClassName} ${variantClassName[variant]} ${className}`

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        href={href}
        target={isBlank ? "_blank" : target}
        onClick={onClick}
        className={mergedClassName + (isIconButton ? " px-4!" : "")}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={className + (isIconButton ? " px-4!" : "") + " cursor-pointer"}
    >
      {children}
    </button>
  )
}

export default Button
