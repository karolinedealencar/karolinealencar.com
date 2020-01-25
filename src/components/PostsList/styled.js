import styled from "styled-components"
import { Link } from "gatsby"

export const PostsListList = styled.ul`
  grid-column: 1 / 13;
  margin: 0;
  padding-left: 0;

  list-style: none;
`

export const PostsListItem = styled.li`
  margin-bottom: 2rem;
`

export const PostsListInfo = styled.div`
  font-size: 1.2rem;
`

export const PostsListTag = styled(Link)`
  color: var(--accent-color);
  text-decoration: none;
`

export const PostsListLink = styled(Link)`
  display: block;
  text-decoration: none;
`

export const PostsListTitle = styled.h3`
  margin: 0.2rem 0 0 0;
`
