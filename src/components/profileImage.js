import React from "react"
import default_user from "../assets/profiles/user.png"

const ProfileImage = ({ size = 40, src, ...rest }) => {
  return (
    <img
      src={src ?? default_user}
      alt="author name"
      style={{
        margin: 0,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "cover",
      }}
      {...rest}
    />
  )
}

export default ProfileImage
