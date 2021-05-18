import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>You Should be a</h1>
    <h1><u>Software Engineer</u></h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>- It's awesome.</p>
    <p>- You'll build amazing things.</p>
    <p>- You can do it.</p>
    <p>- You'll make lots of money.</p>


    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Start Now</Link>
    </p>


  </Layout>
)

export default IndexPage
