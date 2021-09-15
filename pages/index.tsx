import type { NextPage } from 'next'
import Headers from '../layout/headers/headers'
import Banner from '../components/banner'
import Collections from '../components/Collections'
import TopCollection from "../components/common/Collections/TopCollection";
import { Product5 } from "../services/script";
import { Fragment } from 'react'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Headers topClass="top-header"/>
      <Banner />
      <Collections />
      <TopCollection
        titleClass="title4"
        inner="title-inner4"
        line={true}
        type="vegetables"
        title="trending products"
        designClass="section-b-space addtocart_count ratio_square"
        productSlider={Product5}
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
    </Fragment>
  )
}

export default Home
