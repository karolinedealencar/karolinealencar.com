import React from "react"

import * as S from "./styled"

const PostsList = ({ posts }) => (
  <S.PostsListList>
    {posts.map(post => {
      const id = post.node.id
      const date = post.node.frontmatter.date
      const tag = post.node.frontmatter.categories
      const slug = post.node.fields.slug
      const title = post.node.frontmatter.title

      return (
        <S.PostsListItem key={id}>
          <S.PostsListInfo>
            {date} -
            <S.PostsListTag to={`/tags/${tag}`} title={`Go to ${tag} list`}>
              #{tag}
            </S.PostsListTag>
          </S.PostsListInfo>
          <S.PostsListLink to={slug} title={title}>
            <S.PostsListTitle>{title}</S.PostsListTitle>
          </S.PostsListLink>
        </S.PostsListItem>
      )
    })}
  </S.PostsListList>
)

export default PostsList
