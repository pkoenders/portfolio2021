import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
//import Img from '/src/images/profile.jpg'

const ProfileImg = () => {
  return (
    <StaticImage
      src="../../../images/profile.jpg"
      alt="Peter Koenders"
      placeholder="blurred"
      layout="fixed"
      width={48}
      height={48}
    />
  )
}
export default ProfileImg
