import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./style.module.scss"

const Quality = () => {
  const data = useStaticQuery(graphql`
    query {
      FamilyHands: file(relativePath: { eq: "images/img/hands.png" }) {
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
      <div className="container-fluid">
        <div className="row">
          <div className=" col-6">
            <Img fluid={data.FamilyHands.childImageSharp.fluid} />
          </div>
          <div className={style.truck}>
            <Img fluid={data.FamilyHands.childImageSharp.fluid} />
          </div>
          <div className="col-6">
            <h3 className="text-center mb-4">Quality &amp; Licensed</h3>
            <p className="op__descr text-center text-muted mb-5">
              Our moving teams are trained and always ready to help you with
              your move. We understand when you select a moving company its more
              than just stuff we're moving. It's what makes your house a home
              and we want to respect that on every level. From the loading
              stacked to the tip top of the truck to the delivery to your new
              home. Our professional are always making sure their first priority
              is Quality Service.
            </p>
            <div className="row">
              <div className=" col-6">
                <div
                  className={style.rec__item}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Img fluid={data.FamilyHands.childImageSharp.fluid} />
                </div>
              </div>
              <div className=" col-6">
                <div
                  className={style.rec__item}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Img fluid={data.FamilyHands.childImageSharp.fluid} />
                </div>
              </div>
              <div className=" col-12" data-aos="fade-up" data-aos-delay="600">
                <a href="tel:7208297961" className="op__btn mr-3">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Quality
