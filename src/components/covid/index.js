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

  return (
    <>
      <div id="covidhealthnotice" className={style.menu}>
        <p>
          Colorado Dominating Moves is committed to caring for the health and
          well-being of all our customers. We understand these are hard times
          and we make sure that we do our best to keep our workers and customers
          safe.
        </p>
      </div>
    </>
  )
}
