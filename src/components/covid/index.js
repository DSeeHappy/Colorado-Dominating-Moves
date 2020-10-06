import React from "react"
import { Card, Accordion, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image" // to query for image data
import style from "./style.module.scss"

// TODO setup images with small icon to click into large icon with content
export default () => {
  return (
    <>
      <div id="covidhealthnotice" className={style.menu}>
        <h4>Covid Health Notice</h4>
        <p>
          Colorado Dominating Moves is committed to caring for the health and
          well-being of all our customers.
        </p>
        <hr />
        We understand these are hard times and we make sure that we do our best
        to keep our workers and customers safe.
      </div>
    </>
  )
}
