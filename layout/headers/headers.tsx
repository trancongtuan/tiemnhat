import React, { useEffect } from 'react';
import { Col, Container, Media, Row } from 'reactstrap';
import TopBarDark from './common/topbar-dark';
import LogoImage from './common/logo';
import NavBar from './common/navbar';
import search from '../../public/assets/images/icon/search.png';
import cart from '../../public/assets/images/icon/cart.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Headers = ({ headerClass, topClass }: { headerClass?: string; topClass: string }) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(function () {
      (document.querySelectorAll('.loader-wrapper') as any).style = 'display:none';
    }, 2000);

    if (router.asPath !== '/layouts/Christmas') window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 300) {
      if (window.innerWidth < 576) (document as any).getElementById('sticky').classList.remove('fixed');
      else (document as any).getElementById('sticky').classList.add('fixed');
    } else (document as any).getElementById('sticky').classList.remove('fixed');
  };
  return (
    <header id="sticky" className={`sticky ${headerClass}`}>
      <div className="mobile-fix-option"></div>
      <TopBarDark topClass={topClass} />
      <Container>
        <Row>
          <Col>
            <div className="main-menu">
              <div className="menu-left">
                <div className="brand-logo">
                  <LogoImage />
                </div>
              </div>
              <div className="menu-right pull-right">
                {/*Top Navigation Bar Component*/}
                <NavBar />
                <div>
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div mobile-search">
                        <div>
                          <Image src={search} className="img-fluid" alt="" />
                        </div>
                      </li>
                      <li className="onhover-div mobile-cart">
                        <div className="cart-qty-cls">{0}</div>
                        <Link href={`/page/account/cart`}>
                          <div>
                            <Image src={cart} className="img-fluid" alt="" />
                            <i className="fa fa-shopping-cart"></i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Headers;
