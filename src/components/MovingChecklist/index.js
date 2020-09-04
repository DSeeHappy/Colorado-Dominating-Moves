import React from "react"
import style from "./style.module.scss"

const MovingChecklist = () => {
  return (
    <div className="op__block">
      <div className="container-fluid">
        <div className="op__block__heading text-center">
          Our Moving Checklist
        </div>
        <div className="op__block__heading text-center">
          We understand moving is stressful, thats why we would like to provide
          you our simple checklist to make sure you don't forget anything. The
          earlier you can prepare, the less headaches you will have during
          moving day.
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4>2 Months Before Your Move</h4>
              <p className="text-muted">
                For teams that are ready to control and centralize their
                communication on Clean UI
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>FREE</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Install
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4>1 Month Before Your Move</h4>
              <p className="text-muted">
                For businesses ready to step up their team communication and
                access more features
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>$3</span>
                <span className="text-muted">/ user monthly</span>
                <br />
                <span className={style.pricing__price}>$30</span>
                <span className="text-muted">/ user annually</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>2 Weeks Before Your Move</h4>
              <p className="text-muted">
                For businesses needing high-level scalability, management and
                unlimited features
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>Tired Pricing</span>
                <br />
                <span className={style.pricing__price}>Volume Discount</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>1 Weeks Before Your Move</h4>
              <p className="text-muted">
                For businesses needing high-level scalability, management and
                unlimited features
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>Tired Pricing</span>
                <br />
                <span className={style.pricing__price}>Volume Discount</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>Day Before Your Move</h4>
              <p className="text-muted">
                For businesses needing high-level scalability, management and
                unlimited features
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>Tired Pricing</span>
                <br />
                <span className={style.pricing__price}>Volume Discount</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={style.pricing__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4>Moving Day</h4>
              <p className="text-muted">
                For businesses needing high-level scalability, management and
                unlimited features
              </p>
              <div className={style.pricing__prices}>
                <span className={style.pricing__price}>Tired Pricing</span>
                <br />
                <span className={style.pricing__price}>Volume Discount</span>
              </div>
              <a href="/" className="op__btn op__btn--blue">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovingChecklist
