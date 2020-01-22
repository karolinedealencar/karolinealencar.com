import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styled"

const Illustration = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "pluto-come-back-later.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <S.Illustration
      href="https://icons8.com"
      title="Illustration by Ouch.pics"
      target="_blank"
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </S.Illustration>
  )
}

export default Illustration
