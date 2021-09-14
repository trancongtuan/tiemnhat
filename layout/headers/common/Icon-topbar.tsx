import React, { Fragment, useContext } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import logo from "../../../public/favicon.ico";
import like from "../../../public/assets/images/icon/like.png";
import user from "../../../public/assets/images/icon/users.png";
import Link from "next/link";
import search from "../../../public/assets/images/icon/search.png";
const IconTopbar = () => {
  return (
    <Fragment>
      <div className="top-header">
        <Container>
          <Row className="main-menu">
            <Col sm="6">
              <div className="header-contact">
                <ul>
                  <li>Welcome to Our store Multikart</li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>Call Us:
                    123 - 456 - 7890
                  </li>
                </ul>
              </div>
              <div className="menu-left">
                <div className="navbar">
                  <a href={'null'}>
                    <div className="bar-style">
                      <i
                        className="fa fa-bars sidebar-bar"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </a>
                </div>
                <div className="brand-logo mobile-logo">
                  <a href={'#'}>
                    <Media
                      src={`${logo}`}
                      className="img-fluid blur-up lazyload"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm="6">
              <div className="menu-right pull-right">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <Link href="/page/account/wishlist">
                      <a>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <Media src={`${like}`} alt="" />
                      </a>
                    </Link>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <Media src={`${user}`} alt="" />
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <ul className="onhover-show-div">
                      <li>
                        <Link href="/page/account/login">
                          <a data-lng="en">Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a data-lng="es">Logout</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div>
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div mobile-search">
                        <div>
                          <Media
                            src={`${search}`}
                            className="img-fluid"
                            alt=""
                          />
                          <i className="fa fa-search"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default IconTopbar;
