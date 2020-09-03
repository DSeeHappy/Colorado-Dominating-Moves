import React from "react"
import style from "./style.module.scss"
import Logo from '../../resources/img/favicon.png'

export default () => {
  return (
    <div className={style.menu}>
      <div className="op__block">
        <div className={style.menu__inner}>
          <div className={style.menu__logo__container}>
            <div className={style.menu__logo}>
              <img
                src={Logo}
                alt="Colorado Dominating Moves"
              />
              <div className={style.menu__logo__name}>
                Colorado Dominating Moves
              </div>
              <div className={style.menu__logo__descr}>
                {" "}
                Professional, Fast, Efficient
              </div>
            </div>
          </div>
          <div className={style.menu__links}>
            <a href="/" rel="noopener noreferrer">
              Local Services
            </a>
            <a href="/" rel="noopener noreferrer">
              Long Distance Services
            </a>
            <a href="#Service Area" rel="noopener noreferrer">
              Service Area
            </a>
            <a href="/" rel="noopener noreferrer">
              Hire Us
            </a>
            <a href="/" rel="noopener noreferrer">
              Moving Checklist
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
