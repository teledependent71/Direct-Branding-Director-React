import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Branding Director</title>
        <meta property="og:title" content="Direct Branding Director" />
      </Helmet>
    </div>
  )
}

export default Home
