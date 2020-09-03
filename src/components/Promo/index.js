import React from "react"
import Truck from "../../resources/img/icons/truck.svg"
import Map from "../../resources/img/icons/Map.svg"
import Piano from "../../resources/img/icons/piano.png"
import RoadSign from "../../resources/img/roadsign.png"
import style from "./style.module.scss"

export default () => {
  return (
    <>
      <div className={style.promo}>
        <div className="op__block">
          <div className="container-fluid">
            <div
              className={style.promo__notification}
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <span>
                <span role="img" aria-label="">
                  👉
                </span>{" "}
                Gooooood offer only this month! <a href="/">Call Now</a>
              </span>
            </div>
            <div className={style.promo__inner}>
              <div className="row">
                <div className="col-md-6">
                  <h1 data-aos="fade-right">
                    Discover The Greatness Of Colorado
                  </h1>
                  <p
                    className="text"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    Let Our Professional Home &amp; Office Movers Worry About
                    Your Move
                  </p>
                  <ul
                    className={style.promo__list}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <li>
                      <span
                        className={`${style.promo__list__icon} ${style.promo__list__icon__html}`}
                      >
                        <img
                          src={Truck}
                          alt="local moves"
                        />
                      </span>
                      <span>Local Moves</span>
                    </li>
                    <li>
                      <span
                        className={`${style.promo__list__icon} ${style.promo__list__icon__html}`}
                      >
                        <img
                          src={Map}
                          alt="long distance moves"
                        />
                      </span>
                      <span>Long Distance Moves</span>
                    </li>
                    <li>
                      <span
                        className={`${style.promo__list__icon} ${style.promo__list__icon__html}`}
                      >
                        <img
                          src={Piano}
                          alt="piano"
                        />
                      </span>
                      <span>Specialty Furniture</span>
                    </li>
                    <div
                      className={style.promo__buttons}
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="/" className="op__btn mr-3">
                        Call Now
                      </a>
                      <a href="/" className="op__btn op__btn--lightDark">
                        Covid Health Notice
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="col-md-6 ">
                  <div
                    className={style.promo__img}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <img
                      className="align-items-bottom"
                      src={RoadSign}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
