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
                </div>
                <div className="col-md-6">
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
                          Our Professionals Have The Experience To Handle Even The Toughest Loads.
                      
                          </p>
                        </li>
                        
                        
                      </ul>
                    </div>
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
