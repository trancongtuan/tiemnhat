import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Media, Modal, ModalHeader, ModalBody, Input, Row, Col } from 'reactstrap';
import MasterProductDetail from './MasterProductDetail';

const ProductBox4 = ({ product, cartClass }: { product: any, cartClass?: string }) => {
  const router = useRouter();
  // const cartContext = useContext(CartContext);
  const plusQty = 0;
  // const plusQty = cartContext.plusQty;
  const minusQty = 0;
  // const minusQty = cartContext.minusQty;
  // const quantity = cartContext.quantity;
  // const setQuantity = cartContext.setQuantity;
  const [quantity, setQuantity] = useState<number>(0);
  const [modalCompare, setModalCompare] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleCompare = () => setModalCompare(!modalCompare);
  // const curContext = useContext(CurrencyContext);
  // const currency = curContext.state;
  const currency = {
    currency: 'USD',
    symbol: '$',
    value: 1,
  };
  const uniqueTags: any[] = [];

  const changeQty = (e: { target: { value: string } }) => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    const titleProps = product.title.split(' ').join('');
    router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
  };

  const addQty = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
    }
    // addCart(pro, quantity);
  };

  const plusProduct = () => {
    const qty = quantity + 1;
    // plusQty(product);
    // addCart(product, qty);
  };

  const minusProduct = (quantity: number) => {
    if (quantity === 1) {
      setIsOpen(!isOpen);
    }
    setQuantity(quantity);
    // minusQty();
  };

  return (
    <>
      <div className="product-box product-wrap">
        <div className="img-wrapper">
          <div className="lable-block">
            {product.new === 'true' ? <span className="lable3">new</span> : ''}
            {product.sale === 'true' ? <span className="lable4">on sale</span> : ''}
          </div>
          <div className="front" onClick={clickProductDetail}>
            <Media src={product.images[0].src} className="img-fluid" alt="" />
          </div>
          <div className="cart-info cart-wrap">
            <a title="Add to Wishlist">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </a>
            <a  data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={toggle}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>

            <a  title="Compare" onClick={toggleCompare}>
              <i className="fa fa-refresh" aria-hidden="true"></i>
            </a>
          </div>
          <div className="addtocart_btn">
            <button className="add-button add_cart" title="Add to cart" onClick={() => addQty()}>
              add to cart
            </button>
            <div className={`qty-box cart_qty ${isOpen ? 'open' : ''}`}>
              <div className="input-group">
                <span className="input-group-prepend">
                  <button
                    type="button"
                    className="btn quantity-left-minus"
                    onClick={() => minusProduct(quantity)}
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-angle-left"></i>
                  </button>
                </span>
                <input
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={() => setQuantity(quantity)}
                  className="form-control input-number"
                />
                <span className="input-group-prepend">
                  <button
                    type="button"
                    className="btn quantity-right-plus"
                    onClick={() => plusProduct()}
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-angle-right"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <MasterProductDetail
          product={product}
          productDetail=""
          title={'Slim Fit Cotton Shirt'}
          currency={currency}
          uniqueTags={uniqueTags}
          detailClass="text-center"
        />
      </div>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
        <ModalBody>
          <Row>
            <Col lg="6" xs="12">
              <div className="quick-view-img">
                <Media src={product.images[0].src} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" className="rtl-text">
              <div className="product-right">
                <h2> {product.title} </h2>
                <h3>
                  {currency.symbol}
                  {(product.price * currency.value).toFixed(2)}
                </h3>
                {product.variants ? (
                  <ul className="color-variant">
                    {uniqueTags ? (
                      <ul className="color-variant">
                        {uniqueTags.map((vari, i) => {
                          return (
                            <li
                              className={vari.color}
                              key={i}
                              title={vari.color}
                            ></li>
                          );
                        })}
                      </ul>
                    ) : (
                      ''
                    )}
                  </ul>
                ) : (
                  ''
                )}
                <div className="border-product">
                  <h6 className="product-title">product details</h6>
                  <p>{product.description}</p>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal isOpen={modalCompare} toggle={toggleCompare} centered>
        <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
        <ModalBody>
          <Row className="compare-modal">
            <Col lg="12">
              <div className="media">
                <Media src={product.images[0].src} alt="" className="img-fluid" />
                <div className="media-body align-self-center text-center">
                  <h5>
                    <i className="fa fa-check"></i>Item <span>{product.title}</span>
                    <span>successfully added to your Compare list</span>
                  </h5>
                  <div className="buttons d-flex justify-content-center">
                    <Link href="/page/compare">
                      <a className="btn-sm btn-solid">
                        View Compare list
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductBox4;
