import React from "react"
import SEO from "../components/shared/seo/seo"
import GdprContent from "../components/gdpr/gdprcontent"
import Layout from "../hoc/layout/layout"

const GdprPage = () => {
  return (
    <Layout>
      <SEO title="POSTERIS" description="Privacy policy" />
      <GdprContent />
    </Layout>
  )
}

export default GdprPage
