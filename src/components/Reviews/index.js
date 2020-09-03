import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block">
      <div className="container-fluid">
        <h3 className="text-center mb-4">
          Customer reviews
          <br />
          50k+ satisfied clients worldwide
        </h3>
        <p className="op__descr text-center text-muted mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div
              className={style.reviews__item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={style.reviews__title}>Jhon Allen</div>
              <div className={`${style.reviews__company} text-muted`}>
                Soft Networks, Germany
              </div>
              <div className={style.reviews__stars}>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
              </div>
              <p>
                The quality is incredible high and the flexibility is limitless!
                Clean UI Admin Template accelerated development 3x times and
                reduced QA issues by 50%. It's probably saved us $30,000 on this
                project.
              </p>
              <p>
                <strong>Highly recommended to buy!</strong>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={style.reviews__item}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={style.reviews__title}>Benjamin Kouba</div>
              <div className={`${style.reviews__company} text-muted`}>
                LEAF9.com, United States
              </div>
              <div className={style.reviews__stars}>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
              </div>
              <p>
                I've looked at hundreds of bootstrap themes, and this one is by
                far the best I've come across for our project. The design is
                modern, and not cluttered. The code is clean and easily
                manageable, and their customer support has been excellent.
              </p>
              <p>
                <strong>It's new, but this one is definitely a winner!</strong>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`${style.reviews__item} mb-0`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className={style.reviews__title}>Tom N</div>
              <div className={`${style.reviews__company} text-muted`}>
                Clean UI Customer, United States
              </div>
              <div className={style.reviews__stars}>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
                <i className="fe fe-star"></i>
              </div>
              <p>
                I have over 12 years of full stack web programming experience.
                They did a really awesome job with this.
              </p>
              <p>
                <strong>Well worthwhile. Great time saver.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
