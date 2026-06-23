import pkg from "../../../package.json"

const Footer = () => {
  return (
    <footer className="bg-bg py-8 z-1 relative">
      <div className="container mx-auto text-center">
        <p className="text-xs text-dim">
          &copy; {new Date().getFullYear()} Hector Merla — Web Developer · v
          {pkg.version}
        </p>
      </div>
    </footer>
  )
}

export default Footer
