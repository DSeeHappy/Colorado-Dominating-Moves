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
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      id="Moving_Checklist"
      Tag="section"
      fluid={data.TrucksBacks.childImageSharp.fluid}
      backgroundColor={`#fdb41a`}
      className={style.heading}
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
                The earlier you can prepare, the less headaches you will have
                during moving day.
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
                <div className={style.card__main}>
                  <ul>
                    <li className={style.card__subtitle}>
                      <h4>2 Months Before Your Move</h4>
                    </li>
                    <li>
                      <p className="text-muted">
                        Calculate any potential moving expenses
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Create a moving folder to store any important documents
                        related to your move.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Plan a garage sale for anything you don't want to move
                        to your new home.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Start collecting boxes for your move. Starting sooner
                        will make it easier to also start packing.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className={style.card__main}>
                  <ul>
                    <li className={style.card__subtitle}>
                      <h4>1 Month Before Your Move</h4>
                    </li>
                    <li className="text-muted">
                      <p>
                        Look for moving insurance to ensure your valued
                        possesions are protected during the move.
                      </p>
                    </li>
                    <li className="text-muted">
                      <p>
                        Collect all your important documents and store them
                        together somewhere you won't misplace them.
                      </p>
                    </li>
                    <li className="text-muted">
                      <p>
                        Cancel or transfer your services to your new address.{" "}
                        <br />
                        Cable, Internet, Gas, Electric (If moving local you can
                        likely transfer instead of cancel check your providers)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className={style.card__main}>
                  <ul>
                    <li>
                      <h4>2 Weeks Before Your Move</h4>
                    </li>
                    <li>
                      <p className="text-muted">
                        Setup your Trash Services to your new home
                      </p>
                    </li>

                    <li>
                      <p className="text-muted">
                        Update your driver's license, car registration &amp;
                        insurance with your new address. As well as any banking
                        and postal services.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Find local stores where you will do your regular
                        shopping. From a pharmacy for prescriptions to your
                        favorite restaruant.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className={style.card__main}>
                  <ul>
                    <li>
                      <h4>1 Week Before Your Move</h4>
                    </li>
                    <li>
                      <p className="text-muted">
                        Donate anything you are not wanting to move or sell.
                      </p>
                    </li>

                    <li>
                      <p className="text-muted">
                        Clean up your old home, especially if you are renting.
                        This helps ensure you get your deposit back.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Look through any nooks and cranies around your home.
                        Make sure you do not forget anything.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className={style.card__main}>
                  <ul>
                    <li>
                      <h4>Day Before Your Move</h4>
                    </li>
                    <li>
                      <p className="text-muted">
                        Check the weather report, prepare yourself if it rains
                        or snows.
                      </p>
                    </li>

                    <li>
                      <p className="text-muted">
                        Prep your essentials for the first few days. So you
                        don't have to look through each box to find your morning
                        routine needs.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Double check your old home one last time. This will be
                        the last night you stay here. Make sure you don't forget
                        anything.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={style.card__item}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className={style.card__main}>
                  <ul>
                    <li>
                      <h4>Moving Day</h4>
                    </li>
                    <li>
                      <p className="text-muted">
                        Lay down protective layering like plastic covers, to
                        help protect the carpet or wood floors.
                      </p>
                    </li>
                    <li>
                      <p className="text-muted">
                        Feel free to collect your boxes together. Our
                        Professionals will handle everything else.
                      </p>
                    </li>

                    <li>
                      <p className="text-muted">
                        Relax, get to know your new neighbors or get your
                        groceries together for your new home.
                      </p>
                    </li>
                  </ul>
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
