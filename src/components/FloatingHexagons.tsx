import hmLogo from "../assets/hm_logo.svg"

const FloatingHexagons = () => {
  return (
    <div className="relative w-[340px] h-[380px]">
      <div className="absolute top-[28px] left-[8px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[8px] left-[268px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[264px] left-[286px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[240px] left-[-6px] w-16 h-18 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[74px] left-[36px] w-26 h-30 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[124px] left-[212px] w-28 h-32 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[208px] left-[60px] w-20 h-22 bg-bg border border-line clip-hexagon animate-floaty"></div>
      <div className="absolute top-[88px] left-[78px] w-45 h-40 animate-floaty flex items-center justify-center">
        <img src={hmLogo} alt="hecmerladev_logo" />
      </div>
    </div>
  )
}

export default FloatingHexagons
