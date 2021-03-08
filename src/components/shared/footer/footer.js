import React from "react"
import { Container, Row, Col } from "reactstrap"

import classes from "./footer.module.scss"
import Scroll from "../../../utils/scroll"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 6, offset: 0 }}
            lg={{ size: 3, offset: 2 }}
          >
            <div className={classes.leftAlign}>
              <h6 className={classes.heading}>Address</h6>
              <p>
                POSTERIS AB
                <br />
                Bokvägen 1<br />
                11122 Stockholm
              </p>
              <h6 className={classes.heading}>Contact</h6>
              <p>
                info@posteris.se
                <br />
                070-1111111
              </p>
            </div>
          </Col>
          <Col
            xs={{ size: 12, offset: 0 }}
            sm={{ size: 6, offset: 0 }}
            lg={{ size: 3, offset: 2 }}
          >
            {/* <p className={classes.copyright}>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons-licens"
                  src="https://i.creativecommons.org/l/by/4.0/80x15.png"
                />
              </a>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons Attribution License 4.0
              </a>
            </p> */}
            <div className={classes.rightAlign}>
              <h6 className={classes.heading}>Navigation</h6>
              <ul className={classes.footerNav}>
                <li>
                  <Scroll type="id" element="our-beliefs">
                    <a className={classes.navLink} href="!#">
                      Our Beliefs
                    </a>
                  </Scroll>
                </li>
                <li>
                  <Scroll type="id" element="who-we-are">
                    <a className={classes.navLink} href="!#">
                      Who We Are
                    </a>
                  </Scroll>
                </li>
                <li>
                  <Scroll type="id" element="organizational-capital-evolution">
                    <a className={classes.navLink} href="!#">
                      Organizational Capital Evolution
                    </a>
                  </Scroll>
                </li>
                <li>
                  <Scroll type="id" element="inquiries">
                    <a className={classes.navLink} href="!#">
                      Inquiries
                    </a>
                  </Scroll>
                </li>
              </ul>
            </div>
          </Col>
          {/* <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p className={classes.copyright}>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons-licens"
                  src="https://i.creativecommons.org/l/by/4.0/80x15.png"
                />
              </a>
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons Attribution License 4.0
              </a>
            </p>
          </Col> */}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
