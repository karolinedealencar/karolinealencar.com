import React from "react"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"

const Comments = ({ title, slug }) => {
  const completeURL = `https://karolinedealencar.com.br${slug}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname="karolinealencar"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
