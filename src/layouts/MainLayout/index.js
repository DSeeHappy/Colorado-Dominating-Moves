import React, { useEffect } from "react"
import AOS from "aos"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"

import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "@/styles/style.scss"

export default ({ children }) => {
  useEffect(() => {
    // init animations
    AOS.init({
      duration: 1000,
      offset: 100,
    })


  }, [])

  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}
