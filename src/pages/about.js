import React from "react"

import Layout from "../components/Layout"
import { default as AboutPage } from "../components/About"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage />
  </Layout>
)

export default About
