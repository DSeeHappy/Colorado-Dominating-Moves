import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="op__block" data-aos="fade-up" data-aos-delay="200">
      <div className="container-fluid">
        <h3 className="text-center mb-5">Compare our plans</h3>
        <div className={style.table}>
          <table className="table">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <strong>Community</strong>
                </td>
                <td>
                  <strong>Pro</strong>
                </td>
                <td>
                  <strong>Enterprise</strong>
                </td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">Deployment</td>
              </tr>
              <tr>
                <td>Users</td>
                <td>Recommended 1k</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Custom Domain</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr>
                <td>High Scalable Cluster</td>
                <td></td>
                <td></td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">Team Collaboration Features</td>
              </tr>
              <tr>
                <td>Desktop Apps</td>
                <td>Windows, macOS</td>
                <td>Windows, macOS</td>
                <td>Windows, macOS</td>
              </tr>
              <tr>
                <td>End To End Encryption</td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
                <td>
                  <i className="fe fe-check"></i>
                </td>
              </tr>
              <tr className={style.table__section}>
                <td colSpan="4">On-Demand Services</td>
              </tr>
              <tr>
                <td>Low</td>
                <td></td>
                <td>4 business days</td>
                <td>1 business day</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td></td>
                <td>24 hours</td>
                <td>6 hours</td>
              </tr>
              <tr>
                <td>High (Critical)</td>
                <td></td>
                <td>2 hours</td>
                <td>30 minutes</td>
              </tr>
              <tr>
                <td>Onboarding Call</td>
                <td></td>
                <td></td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Migration Assistance</td>
                <td></td>
                <td></td>
                <td>Available for Purchase</td>
              </tr>
              <tr>
                <td>On-Call Assistance</td>
                <td></td>
                <td></td>
                <td>Available for Purchase</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="/" className="op__link">
                    Install
                  </a>
                </td>
                <td>
                  <a href="/" className="op__link">
                    Contact Us
                  </a>
                </td>
                <td>
                  <a href="/" className="op__link">
                    Contact Us
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
