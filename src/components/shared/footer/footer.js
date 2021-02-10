import React from "react"
import { Container, Row, Col } from "reactstrap"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container className={footerStyles.navContainer}>
        <Row>
          <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p className={footerStyles.copyright}>
              {/* <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons-licens"
                  src="https://i.creativecommons.org/l/by/4.0/80x15.png"
                />
              </a> */}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons Attribution License 4.0
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
