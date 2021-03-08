import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./intro.module.scss"
import Scroll from "../../../utils/scroll"
// import Logo from "../../shared/image/logoWhite"
// import Modal from "../../shared/UI/Modal/Modal"
// import Form from "./form/form"
import backgroundVideo from "../../../videos/attractor_compressed.mp4"
import Poster from "../../../images/borealis.png"
// import BottomNav from "./bottomNav/bottomNav"
import Arrow from "../../shared/svg/arrow"

const Intro = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div id="intro" className={classes.outerWrapper}>
      {/* <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="email" name="email" />
        <textarea name="message" />
      </form> */}
      <video
        className={classes.backgroundVideo}
        src={backgroundVideo}
        poster={Poster}
        muted
        loop
        autoPlay
      ></video>
      <div className={classes.backgroundImage}></div>
      <div className={classes.noise}></div>
      {/* <div className={classes.overLay}></div> */}
      <Container className={classes.innerWrapper}>
        <Row className={classes.row}>
          <Col lg={{ size: 12, offset: 0 }}>
            <div className={classes.text}>
              <h1 className={classes.title}>Anim ut cillum do commodo</h1>
              <p className={classes.subTitle}>
                Anim ut cillum do commodo duis ex commodo proident non cillum
                esse eu excepteur ut cillum do commodo duis ex commodo proident
                non cillum esse eu excepteur ut cillum do commodo duis ex duis
                proident non.
              </p>
              {/* <div
                  // data-sal="fade"
                  // data-sal-delay="300"
                  // data-sal-duration="1200"
                  // data-sal-easing="ease-in-back"
                  className={classes.logoContainer}
                >
                  <div className={classes.logo}>
                    <Logo />
                  </div>
                </div> */}
              {/* <div
                // data-sal="fade"
                // data-sal-delay="500"
                // data-sal-duration="1000"
                // data-sal-easing="ease-in-back"
                >
                  <p className={classes.title}>
                    We are currently working on
                    our&nbsp;brand&nbsp;new&nbsp;website.
                  </p>
                </div> */}
              {/* <div
                  // data-sal="fade"
                  // data-sal-delay="1000"
                  // data-sal-duration="2000"
                  // data-sal-easing="ease-out-bounce"
                  className={classes.buttonDiv}
                >
                  <Scroll type="id" element="contact">
                    <a
                      // data-sal="slide-down"
                      // data-sal-delay="100"
                      // data-sal-duration="800"
                      // data-sal-easing="ease-in-out-back"
                      aria-label="Contact"
                      href="!#"
                    >
                      <button
                        className={classes.button}
                        onClick={() => setShowForm(true)}
                      >
                        Get In Touch
                      </button>
                    </a>
                  </Scroll>
                </div> */}
              {/* <Modal
                  show={showForm}
                  onCancel={() => setShowForm(false)}
                  header="Contact"
                >
                  <Form onCancel={() => setShowForm(false)} />
                </Modal> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${classes.arrowContainer} ${classes.down}`}>
        <div
          // data-sal="fade"
          // data-sal-delay="300"
          // data-sal-duration="2000"
          // data-sal-easing="ease-out-bounce"
          className={`${classes.arrow}`}
        >
          <Scroll type="id" element="our-beliefs">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              href="!#"
            >
              <Arrow />
            </a>
          </Scroll>
        </div>
      </div>
      {/* <BottomNav /> */}
    </div>
  )
}

export default Intro
