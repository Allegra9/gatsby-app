import React from 'react'
import { Link } from 'gatsby'
import polarBear from '../images/polar_bear.jpg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <Link to="/about/">ABOUT</Link>
    <br />
    <Link to="/contact">Contact</Link>
    <img src={polarBear} alt="" />
  </Layout>
)

export default IndexPage
