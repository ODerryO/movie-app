import React from "react";
import style from "./Footer.module.css";
import Google from "../../Assets/GP.png";
import App from "../../Assets/AP.png";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark text-light">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-md-0 mt-3 main-footer">
            <div className={style.logo}>
              <span>
                <i className="fas fa-film footer-logo"></i>
              </span>
              <h4>MovieReviewApp</h4>
            </div>
            <p>
              MovieReviewApp started as a hobby of the creator who likes to
              watch and review movies and share them with others. A simple site
              started just for some fun turned into a great place to share
              opinions between movies aficionado. You can look for the movies
              and give them a review yourself. We also show all the data of the
              movies listed on this page. We hope you enjoy this site and find
              it useful to find information about any movie.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-lg-3 col-sm mb-md-0 mb-3 ">
            <h6>Links</h6>
            <ul className="list-unstyled ">
              <li>
                <a href="#!">About us</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Service</a>
              </li>
              <li>
                <a href="#!">Career</a>
              </li>
              <li>
                <a href="#!">Media Center</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm mb-md-0 mb-3">
            <h6>Downloads</h6>
            <div className={style.store}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.imageGoogle}
                  src={Google}
                  alt="Google Playstore"
                />
              </a>
              <a
                href="https://www.apple.com/id/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.imageApp}
                  src={App}
                  alt="Apple Appstore"
                />
              </a>
            </div>
            <h6 className={style.socialsText}>Social Media</h6>
            <div className={style.socials}>
              <span>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square fa-2x social"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest fa-2x social"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fa-2x social"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        {`Copyright © MovieReviewApp 2010-${new Date().getFullYear()}`}
      </div>
    </footer>
  );
};

export default Footer;
