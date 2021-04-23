import React from "react"
import SEO from "../components/shared/seo/seo"
import GdprContent from "../components/gdpr/gdprcontent"

const GdprPage = () => {
  return (
    <React.Fragment>
      <SEO title="POSTERIS" description="Integritetspolicy" />
      <GdprContent />
    </React.Fragment>
  )
}

export default GdprPage
