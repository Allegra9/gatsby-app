import React from 'react'
import { Link } from 'gatsby'
import polarBear from '../images/polar_bear.jpg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Rimvydas!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Which I just deployed on Netlify.</p>
    <Link to="/page-2/">Click here</Link>
    <img src={polarBear} alt=""></img>
  </Layout>
)

export default IndexPage
