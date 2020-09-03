import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div id="Service Area" className={style.unlock}>
      <div className="op__block">
        <div className={style.unlock__container}>
          <div className="container-fluid">
            <h1 data-aos="fade-left" data-aos-delay="200">
              Proudly Serving All of Denver Metro Area  &amp; the Surrounding
              Areas Including:
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              Aurora | Lakewood | Englewood | Westminster | Arvada | Commerce
              City | Greenwood Village | Parker | Highlands Ranch | Littleton |
              Broomfield | Longmont | Colorado Springs | Boulder | Golden |
              Castle Rock | Fort Collins
            </p>
            <a
              href="/"
              className="op__btn"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
