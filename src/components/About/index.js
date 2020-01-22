import React from "react"

import Illustration from "../Illustration"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const About = () => (
  <S.AboutWrapper>
    <S.AboutHeader>
      <Illustration />
      <S.AboutTitle>About</S.AboutTitle>
    </S.AboutHeader>
    <S.AboutParagraph>
      Hi! I'm Karoline Alencar, a web developer since 2016 and here is where I
      share my thoughts about development in general.
    </S.AboutParagraph>
    <S.AboutParagraph>
      You can contact me on{" "}
      <S.AboutLink
        href="mailto:karolinedalencar@gmail.com"
        title="karolinedalencar@gmail.com"
      >
        karolinedalencar@gmail.com{" "}
      </S.AboutLink>
      or{" "}
      <S.AboutLink
        href="https://twitter.com/karoldalencar"
        title="Twitter - @karoldalencar"
      >
        @karoldalencar
      </S.AboutLink>
      . Feel free to ask me anything :)
    </S.AboutParagraph>
    <S.AboutSubtitle>Talks</S.AboutSubtitle>
    <S.AboutList>
      <S.AboutItem>
        <S.AboutLink
          href="https://www.slideshare.net/KarolineAlencar/talk-sorocabacss-entendendo-box-model"
          title="SorocabaCSS - Entendendo Box Model (PT-BR)"
        >
          SorocabaCSS - Entendendo Box Model (PT-BR)
        </S.AboutLink>
      </S.AboutItem>
    </S.AboutList>
    <S.AboutFooter>
      <S.AboutSubtitle marginBottom="true">Social Media</S.AboutSubtitle>
      <SocialLinks isRight="true" />
    </S.AboutFooter>
  </S.AboutWrapper>
)

export default About
