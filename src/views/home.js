import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regal Spiffy Zebra</title>
        <meta property="og:title" content="Regal Spiffy Zebra" />
      </Helmet>
    </div>
  )
}

export default Home
