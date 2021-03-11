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
import Attractor from "../../shared/svg/attractor"

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
      {/* <video
        className={classes.backgroundVideo}
        src={backgroundVideo}
        poster={Poster}
        muted
        loop
        autoPlay
      ></video> */}
      <div className={classes.backgroundImage}></div>
      {/* <div className={classes.backgroundSvg}></div> */}
      <div className={classes.overLay}></div>
      {/* <div className={classes.overLays}></div> */}
      <div className={classes.noise}></div>
      <Container className={classes.innerWrapper}>
        <Row className={classes.row}>
          <Col className={classes.leftColumn} lg={{ size: 12, offset: 0 }}>
            <div className={classes.svg}>
              <Attractor />
            </div>
            <div className={classes.text}>
              <h1 className={classes.title}>The Butterfly Effect</h1>
              <hr />
              <p className={classes.subTitle}>
                Similar to Organisational Capital,{" "}
                <span className={classes.color}>
                  is the sensitive dependence on initial conditions in which a
                </span>{" "}
                small change in a nonlinear system{" "}
                <span className={classes.color}>
                  can result in large differences in a later state.
                </span>
                <br />
                <br />
                In other words, small as we are, we can{" "}
                <span className={classes.color}>
                  have an influence on the world
                </span>
                {/* Anim ut cillum do{" "}
                <span className={classes.color}>commodo duis ex commodo</span>{" "}
                proident non cillum{" "}
                <span className={classes.color}>esse eu excepteur.</span> */}
              </p>
            </div>
            <div>
              <button className={classes.button}>
                <Scroll type="id" element="inquiries">
                  <a href="!#">Contact</a>
                </Scroll>
              </button>
            </div>
          </Col>
        </Row>
        {/* <Row className={classes.row}>
          <Col className={classes.leftColumn} lg={{ size: 8, offset: 0 }}>
            <div className={classes.svg}>
              <Attractor />
            </div>
            <div className={classes.text}>
              <h1 className={classes.title}>Anim ut commodo</h1>
              <hr />
              <p className={classes.subTitle}>
               Small changes to organizational capital can lead to big changes later.
              </p>
            </div>
          </Col>
          <Col className={classes.leftColumn} lg={{ size: 4, offset: 0 }}>
            <div className={classes.svg}>
              <Attractor />
            </div>
          </Col>
        </Row> */}
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
