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
                </div>
              </div>
              <div
                id="navbarToggleExternalContent"
                className={style.menu__links}
              >
                <a href="#Services" rel="noopener noreferrer">
                  <p> Local &amp; Long Distance</p>
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
      </div>
    </>
  )
}
export default Menu
