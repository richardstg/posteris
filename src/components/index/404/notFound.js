import React from "react"
import { Container } from "reactstrap"
// import { Link } from "gatsby"
import notFoundStyles from "./notFound.module.scss"

const NotFound = () => {
  return (
    <Container className={notFoundStyles.outerWrapper} fluid>
      <Container className={notFoundStyles.innerWrapper}>
        <h2 className={notFoundStyles.title}>
          Be patient with us. We’re out making organizational evolution that
          makes a difference for humanity. We’ll be back as soon as possible
        </h2>
        <div
        // data-sal="fade"
        // data-sal-delay="100"
        // data-sal-duration="800"
        // data-sal-easing="ease-out-bounce"
        >
          {/* <Link to="/">
            <button className={notFoundStyles.button}>Home</button>
          </Link> */}
        </div>
      </Container>
    </Container>
  )
}

export default NotFound
