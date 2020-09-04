import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import style from "./style.module.scss"

const MovingChecklist = () => {
  const data = useStaticQuery(graphql`
    query {
      TrucksBacks: file(relativePath: { eq: "images/img/truckinsides.png" }) {
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
      Tag="section"
      fluid={data.TrucksBacks.childImageSharp.fluid}
      backgroundColor={`#fdb41a`}
    >
      <div className="op__block">
        <div className="container-fluid">
          <div className={style.heading}>
            <div className={style.heading__title}>
              <h1 className="op__block__heading text-center">
                Our Moving Checklist
              </h1>
            </div>
            <div className={style.heading__body}>
              <p className=" text-center">
                We understand moving is stressful, thats why we would like to
                provide you our simple checklist to make sure you don't forget
                anything. 
              </p>
            </div>
            <div className={style.heading__body}>
            <p className=" text-center">
             The earlier you can prepare, the less headaches you
              will have during moving day.
            </p>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4>2 Months Before Your Move</h4>
                <p className="text-muted">
                  For teams that are ready to control and centralize their
                  communication on Clean UI
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>FREE</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4>1 Month Before Your Move</h4>
                <p className="text-muted">
                  For businesses ready to step up their team communication and
                  access more features
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>$3</span>
                  <span className="text-muted">/ user monthly</span>
                  <br />
                  <span className={style.card__subtitle}>$30</span>
                  <span className="text-muted">/ user annually</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4>2 Weeks Before Your Move</h4>
                <p className="text-muted">
                  For businesses needing high-level scalability, management and
                  unlimited features
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>Tired Pricing</span>
                  <br />
                  <span className={style.card__subtitle}>Volume Discount</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4>1 Week Before Your Move</h4>
                <p className="text-muted">
                  For businesses needing high-level scalability, management and
                  unlimited features
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>Tired Pricing</span>
                  <br />
                  <span className={style.card__subtitle}>Volume Discount</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4>Day Before Your Move</h4>
                <p className="text-muted">
                  For businesses needing high-level scalability, management and
                  unlimited features
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>Tired Pricing</span>
                  <br />
                  <span className={style.card__subtitle}>Volume Discount</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h4>Moving Day</h4>
                <p className="text-muted">
                  For businesses needing high-level scalability, management and
                  unlimited features
                </p>
                <div className={style.card__main}>
                  <span className={style.card__subtitle}>Tired Pricing</span>
                  <br />
                  <span className={style.card__subtitle}>Volume Discount</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}
export default MovingChecklist
