import React from "react"
import BoxTruck from "../../resources/img/truck.png"
import style from "./style.module.scss"

export default () => {
  return (
    <>
      <div
        className={style.promo__img}
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <img src={BoxTruck} />
      </div>
      <div
        className={style.promo__img}
        data-aos="fade-right"
        data-aos-delay="600"
      >
      </div>
    </>
  )
}
