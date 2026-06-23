import GradientCircle from "../GradientCircle"

const Background = () => {
  return (
    <>
      <GradientCircle
        position="fixed"
        top="-200px"
        right="-150px"
        width="520px"
        height="520px"
        blur="80px"
        bgColor="primary"
      />
      <GradientCircle
        position="fixed"
        bottom="-200px"
        left="-150px"
        width="560px"
        height="526px"
        bgColor="secondary"
        blur="80px"
      />
    </>
  )
}

export default Background
