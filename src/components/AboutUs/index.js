import React from "react"
import General19 from "../kit/widgets/General/19"
import style from "./style.module.scss"

export default () => {
  return (
    <>
      <div
        className={style.promo__img}
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <img src="/resources/img/truck.png" />
      </div>
      <div
        className={style.promo__img}
        data-aos="fade-right"
        data-aos-delay="600"
      >
        <General19 />
      </div>
    </>
  )
}
