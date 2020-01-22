import React from "react"

import * as S from "./styled"

const Post = ({ post }) => (
  <S.PostWrapper>
    <S.PostHeader>
      <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      <S.PostLanguagesWrapper>
        <S.PostLanguagesLink to="/">Post in Portuguese</S.PostLanguagesLink>
      </S.PostLanguagesWrapper>
      <S.PostInfo>
        <S.PostParagraph>
          {post.frontmatter.date} -{" "}
          <S.PostLink to={`/categories/${post.frontmatter.categories}`}>
            #{post.frontmatter.categories}
          </S.PostLink>
        </S.PostParagraph>
      </S.PostInfo>
    </S.PostHeader>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </S.PostWrapper>
)

export default Post
