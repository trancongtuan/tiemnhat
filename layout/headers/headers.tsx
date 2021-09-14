import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TopBarDark from './common/topbar-dark';
import LogoImage from './common/logo';
import NavBar from './common/navbar';

const Headers = ({ headerClass, topClass }: { headerClass?: string; topClass: string }) => {
  return (
    <header id="sticky" className={`sticky ${headerClass}`}>
      <div className="mobile-fix-option"></div>
      <TopBarDark topClass={topClass} />
      <Container>
        <Row>
          <Col>
            <div className="main-menu">
              <div className="menu-left">
                <div className="navbar">
                  <a href={'#'}>
                    <div className="bar-style">
                      <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                    </div>
                  </a>
                </div>
                <div className="brand-logo">
                  <LogoImage />
                </div>
              </div>
              <div className="menu-right pull-right">
                {/*Top Navigation Bar Component*/}
                <NavBar />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Headers;
