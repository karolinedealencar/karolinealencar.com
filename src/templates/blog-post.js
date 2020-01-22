import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Post"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categories
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`
