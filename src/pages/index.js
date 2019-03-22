import React from 'react'
// import { Link } from 'gatsby'
// import polarBear from '../images/polar_bear.jpg'
import otter from '../images/otter.jpg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey there!</h1>
    <h4>Sup boy or girl (or undecided, it's ok)</h4>
    <p>Wanna link up? Fill in the application form on the next page.</p>
    <img src={otter} alt="otter pic" width="400px" />
  </Layout>
)

export default IndexPage
