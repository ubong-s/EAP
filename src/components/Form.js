import React from "react"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Form = () => {
  return (
    <ContactForm>
      <h3>Feel free to contact us</h3>
      <p>
        Do you have any question or a comment? Need more information or help
        with something? Let us know.
      </p>

      <form
        className="form"
        id="form"
        action="https://formspree.io/f/xpzkpoqw"
        method="POST"
      >
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input aria-label="name" type="text" id="name" placeholder="Name" />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email Address</label>
          <input
            aria-label="email"
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Subject</label>
          <input
            aria-label="subject"
            type="text"
            id="subject"
            placeholder="Subject"
          />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="message">message</label>
          <textarea
            aria-label="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <small>error message</small>
        </div>
        <button className="btn form-btn">Send us a message</button>
      </form>
    </ContactForm>
  )
}

export default Form

const ContactForm = styled.div`
  grid-area: form;
  padding: 2.5rem;
  background-color: ${theme.themeWhite};

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 20px;
    }
  }

  .form {
    margin-top: 2rem;

    &-control {
      & label {
        display: none;
      }

      & input,
      & textarea {
        font-size: 1rem;
        border: 0.5px solid rgba(21, 71, 52, 0.5);
        display: block;
        width: 100%;
        padding: 1rem;
      }
      & input::placeholder,
      & textarea::placeholder {
        font-family: ${theme.fontSecondary};
      }

      & input:focus,
      & textarea:focus {
        outline: 0;
        border-color: ${theme.primaryColor};
        font-weight: 600;
      }

      &.success input {
        border-color: green;
      }

      &.error input {
        border-color: red;
      }

      & small {
        display: block;
        font-size: 0.65rem;
        font-style: italic;
        font-weight: 600;
        text-align: right;
        color: red;
        bottom: 0;
        left: 0;
        margin-top: 5px;
        visibility: hidden;
      }

      &.error small {
        visibility: visible;
        margin-bottom: 1rem;
      }
    }

    &-btn {
      display: block;
      width: 100%;
    }
  }
`
