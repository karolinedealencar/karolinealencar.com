import React from "react"

import links from "./content"
import icons from "./icons"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinks>
    <S.SocialLinksList>
      {links.map((item, index) => {
        const Icon = icons[item.label]
        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink
              href={item.link}
              title={item.label}
              target="_blank"
            >
              <Icon />
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinks>
)

export default SocialLinks
