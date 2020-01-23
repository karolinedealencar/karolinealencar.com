import React from "react"

import * as S from "./styled"

const Footer = () => (
  <S.Footer>
    <S.FooterParagraph>
      Made with{" "}
      <span role="img" aria-label="Heart">
        💕
      </span>
      —{" "}
      <S.FooterLink href="/rss.xml" title="RSS Feed">
        RSS Feed
      </S.FooterLink>
    </S.FooterParagraph>
  </S.Footer>
)

export default Footer
