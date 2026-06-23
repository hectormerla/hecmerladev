import hmLogo from "../assets/hm_logo.svg"

const Logo = ({ size = "40px" }: { size?: string }) => {
  return (
    <img
      className="rounded-full"
      src={hmLogo}
      alt="Profile"
      style={{ width: size, height: size }}
    />
  )
}

export default Logo
