import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="formWrapper">
        <form >
            <input type="text" name="name" id="name" placeholder='Your Name' />
            <input type="text" name="email" id="email" placeholder='Your email' />
            <input type="text" name="Subject" id="Subject" placeholder='Your Subject' />
            <textarea name="Message" id="Message" cols="30" rows="10"></textarea>
            <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="addInfo">
        <h2 className='heading'>Hire Me.</h2>
        <p>
          I am available for freelance work. Connect with me via phone: 8929082680 or email: nitinwebdev5@gmail.com
        </p>
        <h2 className='heading2'>Social links:</h2>
        <ul>
          <li><a href="mailto:nitinwebdev5@gmail.com"><i className="fa-solid fa-envelope fa-xl" style={{color: '#c0d2f2'}}></i> Email me</a></li>
          <li><a href="https://www.linkedin.com/in/nitin-singh-6224aa156/"><i className="fa-brands fa-linkedin fa-xl" style={{color: '#c0d2f2'}}></i> Linkedin</a></li>
          <li><a href="https://github.com/Nitin-web-dev"><i className="fa-brands fa-github fa-xl" style={{color: '#c0d2f2'}}></i> Github</a></li>
        </ul>
      </div>
</section>
  )
}

export default Contact
