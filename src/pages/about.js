// eslint-disable-next-line
import React from 'react'
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>This is my about page.</h1>
    <Link to="/">Go back to the homepage</Link>
    <p css={style}>homepage homepage</p>
    <p
      css={css`
        background-color: hotpink;
        &:hover {
          color: ${color};
        }
      `}
    >
      y u still here{' '}
    </p>
  </Layout>
)

export default AboutPage

const color = 'darkgreen'

const style = css`
  color: pink;
  font-size: 3em;
`
