import React, { useState, useEffect, useRef } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"

import Scroll from "../../../../utils/scroll"
import classes from "./bottomNav.module.scss"

const BottomNav = props => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Scroll type="id" element="our-beliefs">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              className={classes.navLink}
              href="!#"
            >
              Our Beliefs
            </a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="who-we-are">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              className={classes.navLink}
              href="!#"
            >
              Who We Are
            </a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="organizational-capital-evolution">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              className={classes.navLink}
              href="!#"
            >
              Organizational Capital Evolution
            </a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="inquiries">
            <a
              // data-sal="slide-down"
              // data-sal-delay="400"
              // data-sal-duration="800"
              // data-sal-easing="ease-in-out-back"
              className={classes.navLink}
              href="!#"
            >
              Inquiries
            </a>
          </Scroll>
        </li>
      </ul>
    </nav>
  )
}

export default BottomNav
