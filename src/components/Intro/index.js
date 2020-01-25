import React from "react"

import Illustration from "../Illustration"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Intro = () => (
  <S.Intro>
    <Illustration />
    <S.IntroContent>
      <S.IntroTitle>
        I'm Karoline, <span>a web developer.</span>
      </S.IntroTitle>
      <SocialLinks />
    </S.IntroContent>
  </S.Intro>
)

export default Intro
