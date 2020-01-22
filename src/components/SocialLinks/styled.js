import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinks = styled.nav``

export const SocialLinksList = styled.ul`
  max-width: 160px;
  margin: 0 auto;
  padding-left: 0;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("large")`
    max-width: 120px;
  `}
`

export const SocialLinksItem = styled.li`
  display: block;
  width: 30px;

  ${media.lessThan("large")`
    width: 24px;
  `}
`

export const SocialLinksLink = styled.a``
