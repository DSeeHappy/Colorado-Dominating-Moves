import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import style from "./style.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      Background: file(relativePath: { eq: "images/img/locationcdm.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BBB: file(relativePath: { eq: "images/img/bbb-quote.png" }) {
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
      id="Moving_Checklist"
      Tag="section"
      fluid={data.Background.childImageSharp.fluid}
      backgroundColor={`#fdb41a`}
      className={style.heading}
    >
      <div id="Service Area" className={style.unlock}>
        <div className="op__block">
          <div className={style.unlock__container}>
            <div className="container-fluid">
              <div
                data-aos="fade-down"
                data-aos-delay="200"
                className={style.card__item}
              >
                <h1>
                  Proudly Serving The Entire Denver Metro Area &amp; the
                  Surrounding Areas Including:
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className={style.unlock__tag}
              >
                Aurora | Lakewood | Englewood | Westminster | Arvada | Commerce
                City | Greenwood Village | Parker | Highlands Ranch | Littleton
                | Broomfield | Longmont | Colorado Springs | Boulder | Golden |
                Castle Rock | Fort Collins
              </div>

              <a href="https://www.bbb.org/denver/quote/request-colorado-dominating-moves-90277041">
                <Img
                  className={style.unlock__img}
                  fluid={data.BBB.childImageSharp.fluid}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
