import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block mb-5" data-aos="fade-up" data-aos-delay="400">
      <div className="container-fluid">
        <div className={style.list}>
          <h3>Web Development</h3>
          <div className="row">
            <div className="col-lg-4">
              <span className={style.list__title}>Web apps</span>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Microservices</span>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
            <div className="col-lg-4">
              <span className={style.list__title}>Cloud Hosting</span>
              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
