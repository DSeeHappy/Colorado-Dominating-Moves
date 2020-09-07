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
      Local: file(relativePath: { eq: "images/img/facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Long: file(relativePath: { eq: "images/img/instagram.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Special: file(relativePath: { eq: "images/img/instagram.png" }) {
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
          <h1 className="op__block__heading text-center">Our Services</h1>
        </div>
        <div className={style.features}>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <Img
                fluid={data.Local.childImageSharp.fluid}
                alt="Local Moving"
              />
            </div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <Img
                fluid={data.Local.childImageSharp.fluid}
                alt="Long Distance Moving"
              />
            </div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <Img
                fluid={data.Local.childImageSharp.fluid}
                alt="Specialty Furniture"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
