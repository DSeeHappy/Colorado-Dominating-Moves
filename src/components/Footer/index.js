import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block mb-4">
      <div className="container-fluid">
        <footer className={style.footer}>
          <div className="row">
            <div className="col-lg-12">
              <div className={style.footer__container}>
                <div>
                  <div className="mb-4">
                    <a
                      href="https://dseehappy.com"
                      className={style.footer__logo}
                    >
                      DSEEHAPPY
                      <span></span>
                    </a>
                  </div>
                  <div>
                    Copyright © 2020 Colorado Dominating Moves |{" "}
                    <a
                      href="https://mediatec.org/privacy-policy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </div>
                  <div className="mb-1"></div>
                </div>
                <div className={style.footer__contactsWrapper}>
                  <div className={style.footer__contacts}>
                    <div className={style.footer__contactsItem}>
                      <div className="mb-1">
                        <b>United States</b>, Aurora Co
                      </div>
                      <a href="tel:720-829-7961">720-829-7961 </a>
                      <br />
                      <a href="mailto:support@coloradodominatingmoves.com">
                        diegodiaz@coloradodominatingmoves.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
