import styled from "styled-components"
import { Link } from "gatsby"

export const PostWrapper = styled.article`
  grid-column: 1 / 13;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const PostHeader = styled.header`
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
`

export const PostTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--accent-color);
  word-wrap: break-word;
`

export const PostLanguagesWrapper = styled.div``

export const PostLanguagesLink = styled(Link)``

export const PostInfo = styled.div``

export const PostParagraph = styled.p``

export const PostLink = styled(Link)``
