import React from "react"
import AliceCarousel from "react-alice-carousel"
import style from "./style.module.scss"

const responsive = {
  0: {
    items: 2,
  },
  560: {
    items: 3,
  },
  660: {
    items: 4,
  },
  820: {
    items: 5,
  },
  1100: {
    items: 6,
  },
}

const items = [
  {
    title: "components",
    count: "190",
  },
  {
    title: "widgets",
    count: "99+",
  },
  {
    title: "pages",
    count: "60+",
  },
  {
    title: "apps",
    count: "17+",
  },
  {
    title: "ui kits",
    count: "02",
  },
  {
    title: "clients",
    count: "7k+",
  },
  {
    title: "theming",
    count: "∞",
  },
  {
    title: "products",
    count: "06",
  },
  {
    title: "settings",
    count: "20+",
  },
]

export default () => {
  return (
    <div className={style.carousel}>
      <div className="op__block" data-aos="fade-up" data-aos-delay="200">
        <div className="container-fluid">
          <div className={style.carousel__slider}>
            <AliceCarousel
              autoHeight={false}
              mouseTrackingEnabled
              buttonsDisabled
              infinite
              dotsDisabled
              responsive={responsive}
              autoPlay
              autoPlayInterval={3000}
            >
              {items.map((item, index) => (
                <div key={index} className={style.carousel__item}>
                  {item.count}
                  <span>{item.title}</span>
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
