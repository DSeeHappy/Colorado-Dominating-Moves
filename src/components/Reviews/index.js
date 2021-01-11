import React from "react"
import style from "./style.module.scss"
export default () => {
  return (
    <div className="op__block pt-3">
      <div className="container-fluid">
        <h3 className="text-center mb-4">
          Customer reviews
          <br />
          Quality work from a quality team.
        </h3>

        <hr />
        <p className="op__descr text-center text-muted mb-5">
          When it comes to quality, our team is recommended by name. Every
          customer remembers Diego and his crew for the amazing moves they
          provide.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div
              className={style.reviews__item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={style.reviews__title}>Andrew L</div>
              <div className={`${style.reviews__company} text-muted`}>
                <a href="https://www.google.com/maps/place/Colorado+Dominating+Moves/@39.6722611,-106.0168574,8z/data=!3m1!4b1!4m5!3m4!1s0x876c6377cf7e1187:0xb742772b13c5bda8!8m2!3d39.6776514!4d-104.8957246">
                  Reviewed on Google
                </a>
              </div>

              <p>
                I hired Diego and his crew. They did a great job and very
                reasonably priced in comparison to other quotes I got. I was
                very impressed that I hired them for 2 other jobs and will
                continue to call on Colorado Dominating Moves.
              </p>
              <p>
                <strong>They did a great job</strong>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={style.reviews__item}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={style.reviews__title}>Douglas</div>
              <div className={`${style.reviews__company} text-muted`}>
                <a href="https://www.google.com/maps/place/Colorado+Dominating+Moves/@39.6722611,-106.0168574,8z/data=!3m1!4b1!4m5!3m4!1s0x876c6377cf7e1187:0xb742772b13c5bda8!8m2!3d39.6776514!4d-104.8957246">
                  Reviewed on Google
                </a>{" "}
                <div className={style.reviews__stars}>
               
              </div>
              </div>

              <p>
                I had a last minute move i needed. I received this companies
                card from a property management/real estate group where I was
                moving to. Colorado Dominating Moves had the best rate out of
                two other's i called - so it was an easy choice who I'd select.
                The movers Diego and Luis took care of my stuff and knocked out
                the task quickly and efficiently. I really appreciate your guys
                work. Thank you again for helping me.
              </p>
              <p>
                <strong>I really appreciate your guys work</strong>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`${style.reviews__item} mb-0`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className={style.reviews__title}>Andrew B</div>
              <div className={`${style.reviews__company} text-muted`}>
                <a href="https://www.google.com/maps/place/Colorado+Dominating+Moves/@39.6722611,-106.0168574,8z/data=!3m1!4b1!4m5!3m4!1s0x876c6377cf7e1187:0xb742772b13c5bda8!8m2!3d39.6776514!4d-104.8957246">
                  Reviewed on Google
                </a>
              </div>

              <p>
                I hired Diego and his crew for my move and ill be using him
                again when we close on our next home. Very professional and
                worked around our busy Schedule. Thanks Diego. Glad I could
                help.
              </p>
              <p>
                <strong>Very Professional</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
