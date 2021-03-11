import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./ourBeliefs.module.scss"
import Arrow from "../../shared/svg/arrow"
import Scroll from "../../../utils/scroll"

const OurBeliefs = () => {
  return (
    <div id="our-beliefs" className={classes.outerWrapper}>
      <div className={`${classes.arrowContainer} ${classes.up}`}>
        <div
          // data-sal="fade"
          // data-sal-delay="300"
          // data-sal-duration="2000"
          // data-sal-easing="ease-out-bounce"
          className={`${classes.arrow}`}
        >
          <Scroll type="id" element="intro">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              className={classes.navLink}
              href="!#"
            >
              <Arrow up />
            </a>
          </Scroll>
        </div>
      </div>
      <Container className={classes.innerWrapper}>
        {/* <div
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease-out-bounce"
        > */}
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            {/* <div className={classes.one}></div>
            <div className={classes.two}></div> */}
            <div className={classes.text}>
              <h1 className={classes.heading}>
                <span>Our Beliefs</span>
              </h1>
              <p>
                We observe that information flows at an
                increasingly&nbsp;higher&nbsp;pace
                <br />
                We observe an increasing number of&nbsp;interconnections{" "}
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                and new&nbsp;business&nbsp;logics
                <br />
                We observe the rise of distributed leadership and&nbsp;
                <br className={classes.linebreakSmall} />
                self&#8209;organizations
                <br />
                <br />
                We believe in deep knowledge and data&#8209;driven&nbsp;
                <br className={classes.linebreakSmall} />
                decision&#8209;making
                <br />
                We believe in pragmatic value creation and{" "}
                <br className={classes.linebreakSmall} />
                cultural&nbsp;alignment
                <br />
                We believe in inner and outer&nbsp;sustainability
                <br />
                <br />
                However, everything we observe and believe in is evolving and it
                is driven&nbsp;by&nbsp;people
              </p>
              {/* </div> */}
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
          <Scroll type="id" element="who-we-are">
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
    </div>
  )
}

export default OurBeliefs
