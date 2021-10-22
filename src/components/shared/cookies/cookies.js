import React, { useState } from "react"
import { Container } from "reactstrap"
import classes from "./cookies.module.scss"

const Cookies = () => {
  const [show, setShow] = useState(true)

  //   if (!show) {
  //     return <></>
  //   }

  return (
    <div
      className={classes.cookies}
      style={{ bottom: `${!show ? "-10rem" : "0"}` }}
    >
      <Container className={classes.container}>
        <p className={classes.text}>
          This site uses cookies to enhance the user experience.
        </p>
        <button className={classes.button} onClick={() => setShow(false)}>
          Accept
        </button>
      </Container>
    </div>
  )
}

export default Cookies
