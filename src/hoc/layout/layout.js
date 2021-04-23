import React from "react"

import Header from "../../components/shared/header/header"
import Footer from "../../components/shared/footer/footer"
import "typeface-libre-baskerville"
import "../../styles/app.scss"
import classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.container}>
      {/* <div className={layoutStyles.attractor}></div> */}
      <Header />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
