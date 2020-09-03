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

    // swith dark theme
    let theme = window.localStorage.getItem("data-kit-theme") || ""
    document.querySelector("html").setAttribute("data-kit-theme", theme)

    document.addEventListener("dblclick", function() {
      let attr = document.querySelector("html").getAttribute("data-kit-theme")
      if (attr === "dark") {
        document.querySelector("html").setAttribute("data-kit-theme", "")
        window.localStorage.setItem("data-kit-theme", "")
      } else {
        document.querySelector("html").setAttribute("data-kit-theme", "dark")
        window.localStorage.setItem("data-kit-theme", "dark")
      }
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
