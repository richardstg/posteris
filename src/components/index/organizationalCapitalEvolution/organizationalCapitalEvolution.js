import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./organizationalCapitalEvolution.module.scss"
import Arrow from "../../shared/svg/arrow"
import Scroll from "../../../utils/scroll"

const OrganizationalCapitalEvolution = () => {
  return (
    <div id="organizational-capital-evolution" className={classes.outerWrapper}>
      <div className={`${classes.arrowContainer} ${classes.up}`}>
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
                <span>Organizational Capital Evolution</span>
              </h1>
              <p>
                Ullamco sint eu sit ut esse fugiat quis consectetur nisi id
                commodo. Ad eiusmod magna consectetur id. Laborum exercitation
                anim aliqua duis cillum tempor irure eu sit dolore excepteur
                ullamco.
              </p>
              <p>
                Ullamco sint eu sit ut esse fugiat quis consectetur nisi id
                commodo. Ad eiusmod magna consectetur id. Laborum exercitation
                anim aliqua duis cillum tempor irure eu sit dolore excepteur
                ullamco. Ullamco sint eu sit ut esse fugiat quis consectetur
                nisi id commodo. Ad eiusmod magna consectetur id. Laborum
                exercitation anim aliqua duis cillum tempor irure eu sit dolore
                excepteur ullamco. Ullamco sint eu sit ut esse fugiat quis
                consectetur nisi id commodo. Ad eiusmod magna consectetur id.
                Laborum exercitation anim aliqua duis cillum tempor irure eu sit
                dolore excepteur ullamco.
              </p>
              <p>
                Ullamco sint eu sit ut esse fugiat quis consectetur nisi id
                commodo. Ad eiusmod magna consectetur id. Laborum exercitation
                anim aliqua duis cillum tempor irure eu sit dolore excepteur
                ullamco. Ullamco sint eu sit ut esse fugiat quis consectetur
                nisi id commodo. Ad eiusmod magna consectetur id. Laborum
                exercitation anim aliqua duis cillum tempor irure eu sit dolore
                excepteur ullamco.
              </p>
              <p>
                Ullamco sint eu sit ut esse fugiat quis consectetur nisi id
                commodo. Ad eiusmod magna consectetur id. Laborum exercitation
                anim aliqua duis cillum tempor irure eu sit dolore excepteur
                ullamco.
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
          <Scroll type="id" element="inquiries">
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

export default OrganizationalCapitalEvolution
