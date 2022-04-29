import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div
      className='Contact'
      data-aos='zoom-in-up'
      data-aos-offset='200'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
    >
      <section className='mt-4 p-4 contacct'>
        <div>
          <h4 className='prj mt-3 contact-h4'>Ready to Work?</h4>
        </div>
        <div>
          <p className='mt-4 texts'>
            If you or your organization is in need of an outstanding website
            that is lacking in no way, I am available to work with you. Please
            contact me via email at
            <Mailto
              email='chukwumachisom18@gmail.com'
              subject='Hello & Welcome'
              body='Hello world!'
            >
              <p className='email'>chukwumachisom18@gmail.com</p>
            </Mailto>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
