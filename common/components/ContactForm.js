import React, { useState } from 'react'
import axios from 'axios'
import cx from 'classnames'

import { Button } from 'common/components'

import styles from './ContactForm.module.css'

const formEndpoint = 'https://formspree.io/f/xgedapnp'

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    firstName: '',
    lastName: '',
    phone: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: formEndpoint,
      data: inputs,
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div className={cx(styles.container)}>
      <h2 className={cx(styles.heading)}>Contact</h2>
      <form
        className={cx(styles.form, { [styles.hidden]: status.submitted })}
        onSubmit={handleOnSubmit}
      >
        <div className={cx(styles.splitContainer)}>
          <div className={cx(styles.split)}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              onChange={handleOnChange}
              required
              placeholder="Enter your email address"
              value={inputs.firstName}
            />
          </div>
          <div className={cx(styles.split)}>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleOnChange}
              required
              placeholder="Enter your last name"
              value={inputs.lastName}
            />
          </div>
        </div>

        <div className={cx(styles.splitContainer)}>
          <div className={cx(styles.split)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              placeholder="Enter your email address"
              value={inputs.email}
            />
          </div>
          <div className={cx(styles.split)}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="number"
              name="phone"
              onChange={handleOnChange}
              placeholder="Enter your phone number"
              value={inputs.phone}
            />
          </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          placeholder="Enter your message"
          required
          value={inputs.message}
        />
        <input
          type="hidden"
          name="_subject"
          value="New lead on kcooper.me"
        ></input>
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </Button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  )
}

export default ContactForm
