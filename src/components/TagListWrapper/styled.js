import styled from "styled-components"
import media from "styled-media-query"

export const TagListWrapper = styled.section`
  grid-column: 1 / 13;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const TagListWrapperTitle = styled.h1`
  margin-bottom: 5rem;
  text-align: center;

  span {
    display: block;
    color: var(--accent-color);
  }

  ${media.lessThan("large")`
    margin: 0 0 1rem 0; 
  `}
`
