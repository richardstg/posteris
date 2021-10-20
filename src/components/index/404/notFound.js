import React from "react"
import { Container } from "reactstrap"
// import { Link } from "gatsby"
import classes from "./notFound.module.scss"

const NotFound = () => {
  return (
    <Container className={classes.outerWrapper} fluid>
      <div className={classes.backgroundImage}></div>
      <div className={classes.overLay}></div>
      <div className={classes.noise}></div>
      <Container className={classes.innerWrapper}>
        <h2 className={classes.title}>
          Be patient with us. We’re out making organizational evolution that
          makes a difference for humanity. We’ll be back as soon as possible
        </h2>
        <p className={classes.text}>
          For inquiries, email us at info@posteris.se
        </p>
        <div
        // data-sal="fade"
        // data-sal-delay="100"
        // data-sal-duration="800"
        // data-sal-easing="ease-out-bounce"
        >
          {/* <Link to="/">
            <button className={classes.button}>Home</button>
          </Link> */}
        </div>
      </Container>
    </Container>
  )
}

export default NotFound
