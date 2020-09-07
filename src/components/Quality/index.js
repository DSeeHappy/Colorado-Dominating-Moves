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
      Insured: file(relativePath: { eq: "images/img/insuredlicensed.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Quote: file(relativePath: { eq: "images/img/quote.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FB: file(relativePath: { eq: "images/img/facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IG: file(relativePath: { eq: "images/img/instagram.png" }) {
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
      <div className={style.center}>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-12 col-md-6">
              <Img
                className={style.center__imglrg}
                fluid={data.FamilyHands.childImageSharp.fluid}
              />
              <div className={style.center__email}>
                <a className="text-center m-4 ">
                  diegodiaz@coloradodominatingmoves.com{" "}
                </a>
              </div>
              <div className={style.center__call}>
                <a className="text-center m-4 ">
                  Call Or Email For Free Quote: 720-829-7961
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className={style.center__content}>
                <div className={style.center__title}>
                  <h3 className="text-center mb-4 ">
                    Quality Licensed Professionals
                  </h3>
                </div>

                <div className={style.center__body}>
                  <p className="op__descr text-center  mb-5">
                    Our moving teams are trained and always ready to help you
                    with your move.
                    <hr />
                    We understand when you select a moving company its more than
                    just stuff we're moving. It's what makes your house a home
                    and we want to respect that on every level.
                    <br />
                    From the loading stacked to the tip top of the truck to the
                    delivery to your new home.
                    <hr /> Our professional are always making sure their first
                    priority is High Quality Service.
                  </p>
                </div>
                <div className="row">
                  <div className=" col-sm-5 col-md-5 col-12">
                    <div
                      className={style.rec__iteminsured}
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <Img fluid={data.Insured.childImageSharp.fluid} />
                    </div>
                  </div>
                  <div className=" col-sm-7 col-md-7 col-12">
                    <div
                      className={style.rec__itemquote}
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <Img fluid={data.Quote.childImageSharp.fluid} />
                    </div>
                  </div>
                  <div
                    className={style.center__callbtn}
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <a
                      href="tel:7208297961"
                      className="op__btn op__btn--blue mr-3"
                    >
                      Call Now
                    </a>
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
export default Quality
