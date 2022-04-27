import React from 'react'

const Contact = () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }
  return (
    <div>
      <section className='mt-5 p-4 contacct'>
        <div>
          <h4 className='prj mt-3'>Ready to Work?</h4>
        </div>
        <div>
          <p className='mt-4 texts'>
            If you or your organization is in need of an outstanding website
            that is lacking in no way, I am available to work with you. Please
            contact me via email at{' '}
            <Mailto
              email='chukwumachisom18@gmail.com'
              subject='Hello & Welcome'
              body='Hello world!'
            >
              chukwumachisom18@gmail.com
            </Mailto>
            ,
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
