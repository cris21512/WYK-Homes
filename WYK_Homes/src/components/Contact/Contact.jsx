import React from 'react'
import logi from '../../assets/icons/logi.png'
import './Contact.css'
import Aurora from '../../Efects/Backgrounds/Aurora/Aurora'

const Contact = () => {
  return (
    <div className='Contact-style'>
        <div className='contact-container'>
          <div className='house-blur'/>
          <section>
            <img src={logi} alt="Logi" className='logi'/>
          </section>
          <section className='colum-style'>
            <h1 className='tit-style'>Redes sociales</h1>
            <a href="#"><h2 className='te-style'>Instagram</h2></a>
            <a href="#"><h2 className='te-style'>X</h2></a>
            <a href="#"><h2 className='te-style'>Facebook</h2></a>
          </section>
          <section>
            <h1 className='tit-style'>Contact and Location</h1>
            <a href="mailto:mastercrack2112.5@gmail.com"><h2 className='te-style'>SLL681242@ICLOUD.COM</h2></a>
            <h2 className='te-style'>+1 (681) 332-7799</h2>
            <h2 className='te-style'>Location: Morgantown</h2>
          </section>
          <section>
            <h1 className='tit-style'>Quik links</h1>
            <a href="#About"><h2 className='te-style'>About</h2></a>
            <a href="#Works"><h3 className='te-style'>Works</h3></a>
            <a href="#Count"><h2 className='te-style'>Count</h2></a>
          </section>
        </div>
    </div>
  )
}

export default Contact;
