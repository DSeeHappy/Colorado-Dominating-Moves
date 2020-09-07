import React from "react"
import { Card, Accordion, Button } from "react-bootstrap"
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
      Local: file(relativePath: { eq: "images/img/icons/home-solid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Long: file(relativePath: { eq: "images/img/icons/road-solid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Special: file(
        relativePath: { eq: "images/img/icons/dolly-flatbed-solid.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function openShit() {}

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
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className={style.features}>
          <Accordion className={style.features__item}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a className={style.features__icon}>
                    <Img
                      className={style.features__Img}
                      fluid={data.Local.childImageSharp.fluid}
                      alt="Local Moving"
                    />
                  </a>
                  Local Home &amp; Business Moving
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {" "}
                  Our team can help take out the stress from moving. Colorado
                  Dominating Moves dominates the competition in any move within
                  Colorado. We focus on High Quality Service for both Home &amp;
                  Business moves.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className={style.features__item}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a onClick={openShit} className={style.features__icon}>
                    <Img
                      className={style.features__Img}
                      fluid={data.Long.childImageSharp.fluid}
                      alt="Long Distance Moving"
                    />
                  </a>
                  Long Distance Moving Service
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  The do it yourself approach is always understandable, we know
                  everyone has a budget. But when it comes to moving your
                  property, the decision to leave it to the professionals may be
                  your best decision during your move. With Colorado Dominating
                  Moves, we know that moving is one of the most stressful
                  moments. We focus on alleviating as much of that stress as
                  possible. Let our team move you to your new home without the
                  moving stress. We let you focus on the journey to your new home
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className={style.features__item}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <a className={style.features__icon}>
                    <Img
                      className={style.features__Img}
                      fluid={data.Special.childImageSharp.fluid}
                      alt="Specialty Furniture"
                    />
                  </a>
                  Specialty Furniture &amp; Equipment
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {" "}
                  Pianos, Safes or anything heavy you really do not want to
                  move. We can handle even the heaviest load with care. Our
                  moving capability is second to none. When it comes to the
                  difficult stuff, Colorado Dominating Moves dominates the
                  competition.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </BackgroundImage>
  )
}
