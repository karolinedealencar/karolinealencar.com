import styled from "styled-components"

export const PostsListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const PostsListWrapperTitle = styled.h2`
  grid-column: 1 / 13;
  margin-top: 0;
  margin-bottom: 1rem;
`
