// eslint-disable-next-line
import React from 'react'
import Layout from '../components/layout'
import pandas from '../images/two-pandas.jpg'
import bamboo from '../images/bamboo-forest.jpg'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <Container
      style={{
        backgroundImage: `url(${bamboo})`,
        backgroundSize: 'cover',
      }}
    >
      <h1>
        Welcome to the <span>p</span>a<span>n</span>d<span>a</span>s' world
      </h1>
      <Content>
        <img src={pandas} alt="pandas having a brrrunch" />
      </Content>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;
  h1 {
    color: #fff;
    font-size: 100px;
    margin-top: 80px;
    margin-bottom: 70px;
  }
  span {
    color: #000;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
    }
  }
`

const Content = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  img {
    border-radius: 30px;
  }
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
