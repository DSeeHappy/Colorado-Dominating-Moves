import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./style.module.scss"

const Promo = () => {
  const data = useStaticQuery(graphql`
    query {
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
        <div className="op__block">
          <div className="container-fluid">
            <div
              className={style.promo__notification}
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <span>
                <span role="img" aria-label="">
                  👉
                </span>{" "}
                Gooooood offer only this month! <a href="/">Call Now</a>
              </span>
            </div>
            <div className={style.promo__inner}>
              <div className="row">
                <div className="col-md-6">
                  <h1 data-aos="fade-right">
                    Discover The Greatness Of Colorado
                  </h1>
                  <p
                    className="text"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    Let Our Professional Home &amp; Office Movers Worry About
                    Your Move
                  </p>
                  <ul
                    className={style.promo__list}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <li>
                      <i class="fas fa-truck"></i>
                      <span>Local Moves</span>
                    </li>
                    <li>
                      <i class="fas fa-truck-loading"></i>
                      <span>Long Distance Moves</span>
                    </li>
                    <li>
                      <i class="fas fa-truck-loading"></i>
                      <span>Specialty Furniture</span>
                    </li>
                    <div
                      className={style.promo__buttons}
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="tel:7208297961" className="op__btn mr-3">
                        Call Now
                      </a>
                      <a href="/" className="op__btn op__btn--lightDark">
                        Covid Health Notice
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="col-md-6 ">
                  <div
                    className={style.promo__img}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Img
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
export default Promo
