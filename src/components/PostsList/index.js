import React from "react"

import * as S from "./styled"

const PostsList = ({ posts }) => (
  <S.PostsListList>
    {posts.map(post => (
      <S.PostsListItem key={post.node.id}>
        <S.PostsListInfo>
          {post.node.frontmatter.date} -
          <S.PostsListTag
            to={`/categories/${post.node.frontmatter.categories}`}
            title={post.node.frontmatter.categories}
          >
            #{post.node.frontmatter.categories}
          </S.PostsListTag>
        </S.PostsListInfo>
        <S.PostsListLink
          to={post.node.fields.slug}
          title={post.node.frontmatter.title}
        >
          <S.PostsListTitle>{post.node.frontmatter.title}</S.PostsListTitle>
        </S.PostsListLink>
      </S.PostsListItem>
    ))}
  </S.PostsListList>
)

export default PostsList
