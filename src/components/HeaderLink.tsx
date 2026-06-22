

const HeaderLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <a className="text-sm text-dim hover:bg-bg-hover py-2 px-3 rounded-md transition duration-300" href={href}>
      {children}
    </a>
  )
}

export default HeaderLink