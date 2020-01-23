import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Header = ({ siteTitle }) => (
  <S.Header>
    <S.HeaderLink to="/" title="Karoline Alencar — Home" logo="true">
      {siteTitle}
    </S.HeaderLink>
    <S.HeaderNav>
      <S.HeaderList>
        <S.HeaderItem>
          <S.HeaderLink to="/about" title="About">
            About
          </S.HeaderLink>
        </S.HeaderItem>
        <S.HeaderItem>
          <S.HeaderLinkRSS href="/rss.xml" title="RSS">
            RSS
          </S.HeaderLinkRSS>
        </S.HeaderItem>
      </S.HeaderList>
    </S.HeaderNav>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
