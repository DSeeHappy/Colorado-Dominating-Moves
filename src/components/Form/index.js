import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="200">
      <div className="container-fluid">
        <div className={style.form}>
          <h2 className="mb-5">
            Ready to get started with your move?
            <br />
            The first step is connecting
          </h2>
          <p>Feel free to add attachments for any specialty furniture for a more exact quote</p>
          <div className="row">
            <div className="col-lg-9">
              <div className={style.form__item}>
                <label htmlFor="name">your full name</label>
                <input className="form-control" type="text" id="name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.form__item}>
                <label htmlFor="email">email</label>
                <input className="form-control" type="text" id="email" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.form__item}>
                <label htmlFor="phone">phone</label>
                <input className="form-control" type="text" id="phone" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.form__item}>
                <label htmlFor="country">Address</label>
                <input className="form-control" type="text" id="country" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.form__item}>
                <label htmlFor="file">attach file</label>
                <input className="form-control" type="file" id="file" />
              </div>
            </div>
            <div className="col-lg-9">
              <div className={style.form__item}>
                <label htmlFor="message">description</label>
                <textarea className="form-control" id="message"></textarea>
              </div>
            </div>
          </div>
          <div className="pt-3 mb-4">
            <button className="op__btn op__btn--blue">Send proposal</button>
          </div>
          <p className={`${style.form__disclaimer} text-muted`}>
            This form collects your personal details so that we can contact you
            back to raise opportunities for cooperation, and we need your
            consent on that. You can withdraw your consent at any time by
            writing to us at hello@mediatec.org. Read our Privacy Policy to
            learn how we protect and manage your data.
          </p>
          <div className={style.form__fig1}></div>
          <div className={style.form__fig2}></div>
          <div className={style.form__fig3}></div>
          <div className={style.form__fig4}></div>
          <div className={style.form__fig5}>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
