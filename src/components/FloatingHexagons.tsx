import hmLogo from "../assets/hm_logo.svg"
import IconHexagon from "./IconHexagon"

const FloatingHexagons = () => {
  return (
    <div className="relative w-[340px] h-[380px]">
      <IconHexagon className="absolute top-[28px] left-[-8px] w-16 h-18 bg-bg2 animate-floaty [animation-delay:100ms] [animation-duration:6s]"></IconHexagon>
      <IconHexagon className="absolute top-[8px] left-[268px] w-16 h-18 bg-bg2 animate-floaty [animation-delay:200ms] [animation-duration:6.5s]"></IconHexagon>
      <IconHexagon className="absolute top-[264px] left-[286px] w-16 h-18 bg-bg3 animate-floaty [animation-delay:300ms] [animation-duration:7s]"></IconHexagon>
      <IconHexagon className="absolute top-[240px] left-[-6px] w-16 h-18 bg-bg2 animate-floaty [animation-delay:400ms] [animation-duration:7.5s]"></IconHexagon>
      <IconHexagon className="absolute top-[74px] left-[26px] w-26 h-30 bg-bg animate-floaty [animation-delay:500ms] [animation-duration:8s]"></IconHexagon>
      <IconHexagon className="absolute top-[124px] left-[212px] w-28 h-32 bg-bg2 animate-floaty [animation-delay:600ms] [animation-duration:8.5s]"></IconHexagon>
      <IconHexagon className="absolute top-[208px] left-[60px] w-20 h-22 bg-bg animate-floaty [animation-delay:700ms] [animation-duration:9s]"></IconHexagon>
      <div className="absolute top-[88px] left-[78px] w-45 h-40 animate-floaty [animation-duration:7.2s] flex items-center justify-center">
        <img src={hmLogo} alt="hecmerladev_logo" />
      </div>
    </div>
  )
}

export default FloatingHexagons
