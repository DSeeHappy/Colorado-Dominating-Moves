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
      RoadSign: file(relativePath: { eq: "images/img/roadsign.png" }) {
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
      <div className={style.promo}>
        <div className="container-fluid">
          <div className={style.promo__center}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className={style.promo__img}
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    <div className={style.promo__inner}>
                      <ul className={style.promo__list}>
                        <li>
                          <h1 className={style.promo__notification}>
                            Professional
                          </h1>
                        </li>
                        <li>
                          <p className={style.promo__subtitle}>
                            Our Loads Will &amp; Forever Be Nice &amp; Precise
                          </p>
                        </li>
                        <li>
                          <h1 className={style.promo__notification}>Fast</h1>
                        </li>
                        <li>
                          <p>
                            Our Professionals Work Hard So You Don't Have To
                          </p>
                        </li>
                        <li>
                          <h1 className={style.promo__notification}>
                            Efficient
                          </h1>
                        </li>
                        <li>
                          <p>We Waste No Time Getting You To Your New Home</p>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                </div>
                <div className="col-md-6">
                  <div
                    className={style.promo__img}
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className={style.promo__inner}>
                      <ul className={style.promo__list}>
                        <li>
                          <h1 className={style.promo__notification}>
                            Over 10 years Experience
                          </h1>
                        </li>
                        <li>
                          <p className={style.promo__subtitle}>
                            Our Professionals Have The Experience To Handle Even
                            The Toughest Loads.
                            <br />
                            We have helped numerous people move their home and
                            business. Colorado Dominating Moves is always
                            dominating the competition in Quality of Service.
                            Because at the end of the day, what matters is your
                            house becoming a home, and with our help that
                            transition will happen smoothly.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={style.promo__img}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Img
                      className={style.promo__Sign}
                      fluid={data.RoadSign.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutUs
