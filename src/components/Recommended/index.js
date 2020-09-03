import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block">
      <div className="container-fluid">
        <h3 className="text-center mb-4">Quality &amp; LIcensed</h3>
        <p className="op__descr text-center text-muted mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="row">
          <div className="col-sm-4 col-6">
            <div
              className={style.rec__item}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={style.rec__icon}>
                <i className="fe fe-activity"></i>
              </div>
              <div className="mb-2">
                <strong>Amazing content</strong>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="op__link">
                    Mdtk Soft Team Playbook
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Agile development
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Git tutorials
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Service management
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Continuous delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div
              className={style.rec__item}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={style.rec__icon}>
                <i className="fe fe-star"></i>
              </div>
              <div className="mb-2">
                <strong>Amazing content</strong>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="op__link">
                    Mdtk Soft Team Playbook
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Agile development
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Git tutorials
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Service management
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Continuous delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div
              className={style.rec__item}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className={style.rec__icon}>
                <i className="fe fe-zap"></i>
              </div>
              <div className="mb-2">
                <strong>Amazing content</strong>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="op__link">
                    Mdtk Soft Team Playbook
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Agile development
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Git tutorials
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Service management
                  </a>
                </li>
                <li>
                  <a href="/" className="op__link">
                    Continuous delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
