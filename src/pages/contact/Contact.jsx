import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa"

import {FiSend} from "react-icons/fi"

import "./Contact.css"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9j52zv6', 'template_k851d7o', form.current, '2TEp023kQI1B_bdgq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel Free To Get In Touch!</h3>

          <p className="contact__description">
            I am always open to discussing new projects, creative
             ideas or oppurtunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">ege.kurtt97@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+90 507 659 25 09</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/egemen-kurt-94a4461a7/" target='_blank' rel="noreferrer" className="contact__social-link"><FaLinkedin /></a>
            <a href="https://github.com/egekurtt" target='_blank' rel="noreferrer" className="contact__social-link"><FaGithubSquare /></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">

          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                name="user_name"
                type="text"
                placeholder='Your Name'
                className="form__control"
                 />
            </div>
            <div className="form__input-div">
              <input 
                name="user_email"
                type="email"
                placeholder='Your Email'
                className="form__control"
                 />
            </div>
            <div className="form__input-div">
              <input 
                name="subject"
                type="text"
                placeholder='Your Subject'
                className="form__control"
                 />
            </div>
          </div>

          <div className="form__input-div">
            <textarea 
              name="message"
              placeholder='Your Message' 
              className="form__control textarea"></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact