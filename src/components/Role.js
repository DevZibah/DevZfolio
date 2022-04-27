import React from 'react'

const Role = () => {
  return (
    <div className='mt-5 p-4'>
      <section>
        <div>
          <h4 className='text-capitalize prj'>The need for me</h4>
        </div>
        <div>
          <div className='mt-4 texts'>
            <h5 className='text-capitalize'>design</h5>
            <p>
              To translate ideas into pixel-perfect designs, I use CSS
              frameworks such as bootstrap and material ui. I'm familiar with
              Figma, which is a fantastic tool for creating stunning websites. I
              also use the technologies mentioned above to create highly
              responsive websites.
            </p>
          </div>
          <div className='mt-4 texts'>
            <h5 className='text-capitalize'>development</h5>
            <p>
              I use React, which is a JavaScript library for creating user
              interfaces. I use react because it makes it simple to create
              interactive user interfaces. Design simple views for each state in
              your application, and React will efficiently update and render
              only the right components when your data changes. With react, an
              app is typically built as a single page application, which means
              that the application code (HTML, CSS, JavaScript) is only loaded
              once.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Role
