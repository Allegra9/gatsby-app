// eslint-disable-next-line
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class contactForm extends React.Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
    message: '',
    submitted: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const { name, email, phoneNumber, company, jobTitle, message } = this.state
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name,
        email,
        phoneNumber,
        company,
        jobTitle,
        message,
        // message: JSON.stringify({
        //   phone: phoneNumber,
        //   company,
        //   job: jobTitle,
        //   q: message,
        // }),
      }),
    })
      .then(
        this.setState({
          submitted: true,
        })
      )
      .catch(error => alert(error))
  }

  render() {
    return (
      <React.Fragment>
        {this.state.submitted ? (
          <Layout>
            <Cont>
              <Link to="/">Go back to the homepage</Link>
              <ThankYou>
                {/* <img src={tickImg} alt="tick logo" /> */}
                <p>Thank you!</p>
              </ThankYou>
            </Cont>
          </Layout>
        ) : (
          <Page>
            <Container>
              <p>Hey, please fill in the form below.</p>
              <Form
                name="pricing-page"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="pricing-page" />
                <p hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <div>
                  <label htmlFor="name">NAME:*</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">EMAIL:*</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone number">PHONE NUMBER:*</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company">COMPANY:*</label>
                  <input
                    type="text"
                    name="company"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="job title">JOB TITLE:*</label>
                  <input
                    type="text"
                    name="jobTitle"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">MESSAGE:</label>
                  <textarea name="message" onChange={this.handleChange} />
                </div>
                <div>
                  <Button green type="submit">
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </Container>
          </Page>
        )}
      </React.Fragment>
    )
  }
}

export default contactForm

const Page = styled.div`
  background-color: #f5f5f5;
  padding: 5em 0;
  padding-top: 1em;
`
const Cont = styled.div`
  background-color: #fff;
  padding: 10em 0;
  @media screen and (max-width: 768px) {
    padding-top: 7em;
  }
  @media screen and (max-width: 750px) {
    padding-top: 4em;
  }
`
const ThankYou = styled.div`
  background-color: #f7f7f7;
  font-family: Muli;
  border-radius: 5px;
  border: 1px solid #b5b7b6;
  padding: 2em;
  padding-bottom: 4em;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  img {
    width: 100px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`
const Container = styled.div`
  background-color: #fff;
  padding: 2em;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 750px) {
    width: 95%;
  }
`
const Form = styled.form`
  padding-top: 0;
  text-align: left;
  div {
    margin-bottom: 10px;
    label {
      color: grey;
      text-align: left;
      margin-bottom: 8px;
      font-size: 0.9em;
      display: block;
    }
    input {
      padding: 5px;
    }
  }
  input,
  textarea {
    border: 1px solid #d6d8d6;
    border-radius: 5px;
    width: 90%;
    &:focus {
      outline: none;
    }
  }
`
const Button = styled.button`
  margin-bottom: 2em;
  background-color: ${props => (props.green ? '#25c437' : '#48aeef')};
  &:hover {
    background-color: ${props => (props.green ? '#1ece34' : '#3fb3fc')};
  }
  &:focus {
    outline: none;
  }
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  height: 2.5em;
  padding: 0 4.5em;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  @media screen and (max-width: 900px) {
    padding: 0 2em;
  }
  @media screen and (max-width: 750px) {
    padding: 0 2.5em;
  }
`
