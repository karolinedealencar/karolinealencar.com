import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/NotFoundWrapper/styled"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pluto-sign-in.png" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <S.NotFoundWrapper>
        <S.NotFoundWrapperTitle>Nothing Here... :(</S.NotFoundWrapperTitle>
        <S.NotFoundImgWrapper
          href="https://icons8.com"
          title="Illustration by Ouch.pics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </S.NotFoundImgWrapper>
        <S.NotFoundWrapperLink to="/" title="Go to home">
          Go home...
        </S.NotFoundWrapperLink>
      </S.NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage
