import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm">
            <h4>About</h4>
            <p>
              Tenancy hub is an online global platform that connects customer
              and buyers with convenience. We aim to bring back fun and easy of
              doing business. Sell at any time, any place at your own pace!
            </p>
            <ul className="d-flex">
              <li className="p-2">
                <i className="fab fa-facebook fa-2x"></i>
              </li>
              <li className="p-2">
                <i className="fab fa-linkedin fa-2x"></i>
              </li>
              <li className="p-2">
                <i className="fab fa-instagram fa-2x"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm">
            {/* <div className="foot-courses-list"> */}
            <h4>Contact</h4>
            <div>
              <div>
                <p className="contLink">
                  {" "}
                  <a
                    href="mailto:yusufsaheedtaiwo@gmail.com"
                    style={{ color: "black" }}
                  >
                    <i className="fas fa-phone" /> yusufsaheedtaiwo@gmail.com
                  </a>
                </p>

                <p className="contLink">
                  {" "}
                  <a
                    href="mailto:writeshittu@gmai.com"
                    style={{ color: "black" }}
                  >
                    <i className="fas fa-tools" /> For support
                  </a>
                </p>
                <p className="contLink">
                  <a
                    href="mailto:yusufsaheedtaiwo@gmail.com"
                    style={{ color: "black" }}
                  >
                    <i className="fas fa-info" /> Inquiries
                  </a>
                </p>
                <p className="contLink">
                  <a href="mailto:yusufsaheedtaiwo@gmail.com">
                    <i className="fas fa-book" /> careers@tenancyhub.co
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm">
            <div className="foot-courses-list">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Meet the Team</li>
                <li>Plans</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
