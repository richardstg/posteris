import React from "react"
import SEO from "../components/shared/seo/seo"
import Layout from "../hoc/layout/layout"
// import Intro from "../components/index/intro/intro"
// import OurBeliefs from "../components/index/ourBeliefs/ourBeliefs"
// import WhoWeAre from "../components/index/whoWeAre/whoWeAre"
// import OrganizationalCapitalEvolution from "../components/index/organizationalCapitalEvolution/organizationalCapitalEvolution"
// import Inquiries from "../components/index/inquiries/inquiries"

import NotFound from "../components/index/404/notFound"

const IndexPage = () => {
  return (
    <Layout>
      {/* <SEO title="POSTERIS" description="" />
      <Intro />
      <OurBeliefs />
      <WhoWeAre />
      <OrganizationalCapitalEvolution />
      <Inquiries /> */}
      <SEO title="Home" description="Website under construction." />
      <NotFound />
    </Layout>
  )
}

export default IndexPage
