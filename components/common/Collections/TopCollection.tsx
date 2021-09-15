import React, { useContext } from 'react';
import Slider from 'react-slick';
import ProductItem from '../product-box/ProductBox';
import { Row, Col, Container } from 'reactstrap';
import PostLoader from '../widgets/PostLoader';
import Dumdata from './data.json';

interface ITopCollection {
  type?: string;
  title?: string;
  subtitle?: string;
  designClass?: string;
  noSlider?: string;
  cartClass?: string;
  productSlider?: any;
  titleClass?: string;
  inner?: string;
  line?: boolean;
}

const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  noSlider,
  cartClass,
  productSlider,
  titleClass,
  inner,
  line,
}: ITopCollection) => {
  const data = Dumdata;
  return (
    <>
      <section className={designClass}>
        {noSlider ? (
          <Container>
            <Row>
              <Col>
                <div className={titleClass}>
                  {subtitle ? <h4>{subtitle}</h4> : ''}
                  <h2 className={inner}>{title}</h2>
                  {line ? (
                    <div className="line">
                      <span></span>
                    </div>
                  ) : (
                    <hr role="tournament6" />
                  )}
                </div>
                {!data || !data.products || data.products.items.length === 0 ? (
                  <div className="row mx-0 margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  <Slider {...productSlider} className="product-4 product-m no-arrow">
                    {data &&
                      data.products.items.slice(0, 8).map((product, index) => (
                        <div key={index}>
                          <ProductItem product={product} cartClass={cartClass} />
                        </div>
                      ))}
                  </Slider>
                )}
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            <div className="title1 title-gradient  section-t-space">
              {subtitle ? <h4>{subtitle}</h4> : ''}
              <h2 className="title-inner1">{title}</h2>
              <hr role="tournament6" />
            </div>
            <Container>
              <Row>
                {data &&
                  data.products.items.slice(0, 8).map((product, index) => (
                    <Col xl="3" sm="6" key={index}>
                      <div>
                        <ProductItem product={product} />
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </>
        )}
      </section>
    </>
  );
};

export default TopCollection;
