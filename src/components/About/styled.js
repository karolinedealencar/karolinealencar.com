import styled from "styled-components"

export const AboutWrapper = styled.article`
  grid-column: 1 / 13;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
export const AboutHeader = styled.header``

export const AboutTitle = styled.h1`
  margin-top: 0;
  color: var(--accent-color);
  text-align: center;
`

export const AboutParagraph = styled.p``

export const AboutLink = styled.a``

export const AboutSubtitle = styled.h3`
  margin-bottom: ${props => (props.marginBottom ? "1rem" : "0")};
`

export const AboutList = styled.ul``

export const AboutItem = styled.li``

export const AboutFooter = styled.footer``
