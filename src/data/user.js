import default_user from "../assets/profiles/user.png"
import semin_avatar from "../assets/profiles/semin.png"
import juyeon_avatar from "../assets/profiles/juyeon.jpg"
import joope_avatar from "../assets/profiles/joope.jpg"
import hyunyi_avatar from "../assets/profiles/hyunyi.jpg"
import yiyeop_avatar from "../assets/profiles/yiyeop.png"

const userList = {
  default: {
    nickname: "오아시스비즈니스",
    avatar: default_user,
    homepageUrl: "https://github.com/OasisBusiness",
  },
  이상엽: {
    nickname: "yiyeop",
    team: "FE",
    avatar: yiyeop_avatar,
    homepageUrl: `https://github.com/yiyeop`,
  },
  박태현: {
    nickname: "taehyunpark",
    team: "DATA",
    avatar: default_user,
  },
  양세민: {
    nickname: "semin",
    avatar: semin_avatar,
    homepageUrl: `https://github.com/sminy85`,
  },
  박주형: {
    nickname: "joo-pe",
    team: "BE",
    avatar: joope_avatar,
    homepageUrl: `https://github.com/joo-pe`,
  },
  김주연: {
    nickname: "juyeon",
    team: "BE",
    avatar: juyeon_avatar,
    homepageUrl: `https://github.com/juyeonkim97`,
  },
  김현이: {
    nickname: "현이킴",
    team: "FE",
    avatar: hyunyi_avatar,
    homepageUrl: `https://github.com/hyunyikim`,
  },
}

export const getUserInfo = key => {
  if (userList[key]) return userList[key]
  else return userList.default
}
