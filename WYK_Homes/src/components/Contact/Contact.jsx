import React from 'react'
import phone from '../../assets/icons/phone.svg'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact-style'>
        <section className='house-blur'/>
        <div clasName='footer-container'>
          <section className='footer-column'>
            <img src={phone} alt="phone" />
            <h3>WYK Homes</h3>
          </section>
          <div className='footer-column'>
            <h1>Phone</h1>
            <p>+1 (123) 456-7890</p>
            <p>+1 (123) 456-7890</p>
          </div>
          <section className='footer-column'>
            <h1>Email</h1>
            <p>aqui nos contactas con el correo putoelquelee@hotmail</p>
          </section>
        </div>
    </div>
  )
}

export default Contact;
