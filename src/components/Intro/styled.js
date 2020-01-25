import styled from "styled-components"
import media from "styled-media-query"

export const Intro = styled.section`
  text-align: center;
`

export const IntroContent = styled.div`
  transform: translateY(-35px);

  ${media.lessThan("large")`
    transform: translateY(-20px);
  `}
`

export const IntroTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;

  span {
    display: block;
  }

  ${media.lessThan("large")`
    font-size: 2.2rem;
  `}
`
