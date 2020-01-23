import React from "react"

import Comments from "../Comments"

import * as S from "./styled"

const Post = ({ post }) => {
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const tag = post.frontmatter.tag

  return (
    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostLanguagesWrapper>
          <S.PostLanguagesLink to="/" title="Post in Portuguese">
            Post in Portuguese
          </S.PostLanguagesLink>
        </S.PostLanguagesWrapper>
        <S.PostInfo>
          <S.PostParagraph>
            {date} -{" "}
            <S.PostLink to={`/tags/${tag}`} title={`Go to ${tag} list`}>
              #{tag}
            </S.PostLink>
          </S.PostParagraph>
        </S.PostInfo>
      </S.PostHeader>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Comments title={title} slug={post.fields.slug} />
    </S.PostWrapper>
  )
}

export default Post
