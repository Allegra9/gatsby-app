// eslint-disable-next-line
import React from 'react'
import otterNext from '../images/otterNext.gif'

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
    // name: '',
    // email: '',
    // phoneNumber: '',
    // company: '',
    // jobTitle: '',
    // message: '',
    //submitted: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    //const { name, email, phoneNumber, company, jobTitle, message } = this.state
    console.log('before post: ', this.state)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
        // name,
        // email,
        // phoneNumber,
        // company,
        // jobTitle,
        // message,
        // message: JSON.stringify({
        //   phone: phoneNumber,
        //   company,
        //   job: jobTitle,
        //   q: message,
        // }),
      }),
    })
      .then(res => console.log(res))
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
          <Cont>
            <ThankYou>
              <h1>Thank you, next!</h1>
              <img src={otterNext} alt="" />
            </ThankYou>
          </Cont>
        ) : (
          <Container>
            <p>Hey, please fill in the form below to link up:</p>
            <Form
              name={this.props.demo ? 'second-page' : 'contact'}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value={this.props.demo ? 'second-page' : 'contact'}
              />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  required
                  placeholder="Yo name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="insta"
                  onChange={this.handleChange}
                  required
                  placeholder="Yo insta"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  required
                  placeholder="Yo phone number"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="otters"
                  onChange={this.handleChange}
                  required
                  placeholder="So do you like otters?"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="snap"
                  onChange={this.handleChange}
                  required
                  placeholder="Yo snap"
                />
              </div>
              <div>
                <label htmlFor="message">
                  What makes you unique? Why you wanna hang out?{' '}
                </label>
                <textarea name="message" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="message2">You wear adidas?</label>
                <textarea name="message2" onChange={this.handleChange} />
              </div>
              <div>
                <Button green type="submit">
                  SEND and don't look back
                </Button>
              </div>
            </Form>
          </Container>
        )}
      </React.Fragment>
    )
  }
}

export default contactForm

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
  margin-top: 30px;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 0;
  }
`
const Form = styled.form`
  padding-top: 0;
  text-align: left;
  div {
    margin-bottom: 20px;
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
  padding: 0 3.5em;
  white-space: nowrap;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  @media screen and (max-width: 900px) {
    padding: 0 2em;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`
