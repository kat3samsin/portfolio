import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Katrina Lou S. Tantay" keywords={[`katrina`, `lou`, `samsin`, 'tantay', 'gatsby', 'portfolio']} />
    <h1>Hi I'm Katre!</h1>
    <p>Welcome to my portfolio.</p>
    <p>Hope you have fun!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
