import type { NextPage } from 'next'
import Headers from '../layout/headers/headers'
import { Fragment } from 'react'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Headers topClass="top-header" />
    </Fragment>
  )
}

export default Home
