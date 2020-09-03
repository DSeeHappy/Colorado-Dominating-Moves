import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data

import style from "./style.module.scss"
// TODO setup images with small icon to click into large icon with content
export default () => {
  const LocalMovingSmall = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="400">
      <div className="container-fluid">
        <div className="op__block__heading text-center">Our Services</div>
        <div className={style.features}>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/gatsby.svg" alt="GatsbyJS" />
            </div>
            <div className={style.features__title}>Local Moving</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/sketch.svg" alt="Sketch" />
            </div>
            <div className={style.features__title}>Long Distance Moving</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/highcharts.svg" alt="Highcharts" />
            </div>
            <div className={style.features__title}>Specialty Furniture</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/nodejs-icon.svg" alt="NodeJS" />
            </div>
            <div className={style.features__title}>Packing Services</div>
          </div>
          <div className={style.features__item}>
            <div className={style.features__icon}>
              <img src="/resources/img/icons/react.svg" alt="React" />
            </div>
            <div className={style.features__title}>Junk Removal</div>
          </div>
        </div>
      </div>
    </div>
  )
}
