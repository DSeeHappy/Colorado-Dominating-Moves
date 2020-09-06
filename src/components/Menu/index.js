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
      FB: file(relativePath: { eq: "images/img/facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IG: file(relativePath: { eq: "images/img/instagram.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [navbar, setnavbar] = useState(false)
  return (
    <>
      <div className="fixed-top">
        <div className={style.menu}>
          <div className="op__block">
            <div className={style.menu__inner}>
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
                    <nav class="navbar navbar-dark ">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                id="navbarToggleExternalContent"
                className={style.menu__links}
              >
                <a href="#Services" rel="noopener noreferrer">
                  Local &amp; Long Distance
                </a>
                <a href="#Service Area" rel="noopener noreferrer">
                  Service Area
                </a>
                <a href="#Hire Us" rel="noopener noreferrer">
                  Hire Us
                </a>
                <a href="#Moving Checklist" rel="noopener noreferrer">
                  Moving Checklist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
