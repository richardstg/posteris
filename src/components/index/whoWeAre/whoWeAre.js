import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./whoWeAre.module.scss"
import Arrow from "../../shared/svg/arrow"
import Scroll from "../../../utils/scroll"

const WhoWeAre = () => {
  return (
    <div id="who-we-are" className={classes.outerWrapper}>
      <div className={`${classes.arrowContainer} ${classes.up}`}>
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
            <div className={classes.text}>
              <h1 className={classes.heading}>
                <span>Who We Are</span>
              </h1>
              <p>
                We come from all different backgrounds,{" "}
                <br className={classes.linebreakExtraLarge} />
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                <br className={classes.linebreakSmall} />
                brought&nbsp;together by a passion for
                people&nbsp;and&nbsp;business
                <br />
                {/* <br className={classes.linebreakPhone} /> */}
                We are real people who combine
                Mind,&nbsp;Heart&nbsp;and&nbsp;Soul
                in&nbsp;all&nbsp;that&nbsp;we&nbsp;are
                <br />
                <br className={classes.linebreakPhone} />
                We want to make a positive impact&nbsp;on&nbsp;the&nbsp;world
                <br />
                {/* <br className={classes.linebreakPhone} /> */}
                We think differently with an ambition{" "}
                {/* <br className={classes.linebreakSmall} /> */}
                to challenge&nbsp;conventionality
                <br />
                {/* <br className={classes.linebreakPhone} /> */}
                We don’t take shortcuts, We create sustainable&nbsp;value
                <br />
                <br className={classes.linebreakPhone} />
                We are a team <br className={classes.linebreakSmall} />
                with a shared evolving purpose&nbsp;and&nbsp;values
                <br />
                {/* <br className={classes.linebreakPhone} /> */}
                We develop people who evolve organizations that make{" "}
                <br className={classes.linebreakMedium} />a difference
                in&nbsp;the&nbsp;world
                <br />
                <br />
                We create Organizational Capital&nbsp;Evolution
                <br />
                {/* <br className={classes.linebreakPhone} /> */}
                And we are looking for Someone to join&nbsp;our&nbsp;team
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
          <Scroll type="id" element="organizational-capital-evolution">
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

export default WhoWeAre
