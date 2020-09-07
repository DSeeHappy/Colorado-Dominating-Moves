import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image" // to query for image data
import style from "./style.module.scss"

// TODO setup images with small icon to click into large icon with content
export default () => {
  const data = useStaticQuery(graphql`
    query {
      Trucks: file(relativePath: { eq: "images/img/trucksbacks.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Local: file(relativePath: { eq: "images/img/icons/home-solid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Long: file(relativePath: { eq: "images/img/icons/road-solid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Special: file(
        relativePath: { eq: "images/img/icons/dolly-flatbed-solid.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      id="Services_Background"
      Tag="section"
      fluid={data.Trucks.childImageSharp.fluid}
      backgroundColor={`#fff`}
      className={style.background}
    >
      <div
        id="Services"
        className="container-fluid"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className={style.features__title}>
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className={style.features}>
          <div className={style.features__item}>
            <a className={style.features__icon}>
              <Img
                className={style.features__Img}
                fluid={data.Local.childImageSharp.fluid}
                alt="Local Moving"
              />
            </a>
            <div className={style.features__subtitle}>Local Moving</div>
          </div>
          <div className={style.features__item}>
            <a className={style.features__icon}>
              <Img
                className={style.features__Img}
                fluid={data.Long.childImageSharp.fluid}
                alt="Long Distance Moving"
              />
            </a>
            <div className={style.features__subtitle}>Long Distance Moving</div>
          </div>
          <div className={style.features__item}>
            <a className={style.features__icon}>
              <Img
                className={style.features__Img}
                fluid={data.Special.childImageSharp.fluid}
                alt="Specialty Furniture"
              />
            </a>
            <h1 className={style.features__subtitle}>Specialty Furniture</h1>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
