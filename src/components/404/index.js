import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.error}>
      <div className="op__block">
        <div className={style.error__container}>
          <div className="container-fluid">
            <h1 data-aos="fade-left" data-aos-delay="200">
              Page not found
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              This page is deprecated, deleted, or does not exist at all
            </p>
            <a
              href="/"
              className="op__btn"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
