import React from 'react'
import Layout from '../components/layout'
import otter from '../images/otter.jpg'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Hey little otter!</h1>
      <h4>Sup</h4>
      <p>Wanna link up? Fill in the application form on the next page.</p>
      <img src={otter} alt="otter pic" width="400px" />
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  margin-top: 30px;
`
