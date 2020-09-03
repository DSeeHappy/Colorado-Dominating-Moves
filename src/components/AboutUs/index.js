import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./style.module.scss"

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      Truck: file(relativePath: { eq: "images/img/truck.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <div
          className={style.promo__img}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <Img
            className={style.promo__Truck}
            fluid={data.Truck.childImageSharp.fluid}
          />
        </div>
        <div
          className={style.promo__img}
          data-aos="fade-right"
          data-aos-delay="600"
        ></div>
      </div>
    </>
  )
}
export default AboutUs
