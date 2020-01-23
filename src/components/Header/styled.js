import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`

export const HeaderNav = styled.nav`
  grid-column: 7 / 13;

  ${media.lessThan("large")`
    grid-column: 6 / 13;  
  `}
`

export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding-left: 0;
  list-style: none;
`

export const HeaderItem = styled.li``

export const HeaderLink = styled(Link)`
  display: block;
  padding: ${props => (props.logo ? "0" : "0.8rem")};
  font-size: ${props => (props.logo ? "1.6rem" : "1.4rem")};
  text-decoration: none;
  grid-column: ${props => (props.logo ? "1 / 6" : "")};

  ${media.lessThan("large")`
    padding: .4rem;
    font-size: 1.2rem; 
  `}
`

export const HeaderLinkRSS = styled.a`
  display: block;
  padding: 0.8rem;
  font-size: 1.4rem;
  text-decoration: none;

  ${media.lessThan("large")`
    padding: .4rem;
    font-size: 1.2rem; 
  `}
`
