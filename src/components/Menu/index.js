import React from "react"
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

  return (
    <div className={style.menu}>
      <div className="op__block">
        <div className={style.menu__inner}>
          <div className={style.menu__logo__container}>
            <div className={style.menu__logo}>
              <Img
                fluid={data.Logo.childImageSharp.fluid}
                alt="Colorado Dominating Moves"
              />
              <div className={style.menu__logo__name}>
                Colorado Dominating Moves
              </div>
              <div className={style.menu__logo__descr}>
                {" "}
                Professional, Fast, Efficient
              </div>
            </div>
          </div>
          <div className={style.menu__links}>
            <a href="#LocalServices" rel="noopener noreferrer">
              Local Services
            </a>
            <a href="#LongDistanceServices" rel="noopener noreferrer">
              Long Distance Services
            </a>
            <a href="#Service Area" rel="noopener noreferrer">
              Service Area
            </a>
            <a href="#HireUs" rel="noopener noreferrer">
              Hire Us
            </a>
            <a href="#MovingChecklist" rel="noopener noreferrer">
              Moving Checklist
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu
