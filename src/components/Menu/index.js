import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./style.module.scss"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      Logo: file(relativePath: { eq: "images/img/favicon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className="fixed-top">
        <div className={style.menu}>
          <div className="op__block">
            <div className={style.menu__logo__container}>
              <div className={style.menu__logo}>
                <Img
                  className={style.menu__logo__img}
                  fluid={data.Logo.childImageSharp.fluid}
                  alt="Colorado Dominating Moves"
                />
                <div className={style.menu__logo__descr}>
                  Professional, Fast, Efficient
                </div>
                <div className={style.menu__navbar}>
                  <nav className="navbar navbar-dark">
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={showDrawer}
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  </nav>
                </div>

                <div className={style.menu__links}>
                  <a href="#Services" rel="noopener noreferrer">
                    <p>Home &amp; Office Moves</p>
                  </a>
                  <a href="#Service Area" rel="noopener noreferrer">
                    <p> Service Area</p>
                  </a>
                  <a href="#Moving Checklist" rel="noopener noreferrer">
                    <p> Moving Checklist</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {visible && (
            <div className={style.navbar}>
              <div className={style.menu__navbar__links}>
                <a href="#Services" rel="noopener noreferrer">
                  <p> Home &amp; Office Moves</p>
                </a>
                <a href="#Service Area" rel="noopener noreferrer">
                  <p> Service Area</p>
                </a>
                <a href="#Moving Checklist" rel="noopener noreferrer">
                  <p> Moving Checklist</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Menu
