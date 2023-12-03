import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-orange-50 flex flex-row justify-between py-24 px-24'>
        <img
          src='https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512'
          alt='image'
        />

        <ul className='flex flex-col'>
          <li className='text-xl font-semibold'>
            <a href='#'>Feature</a>
          </li>
          <li className='text-xl font-semibold'>
            <a href='#'>FAQ</a>
          </li>
          <li className='text-xl font-semibold'>
            <a href='#'>Pricing</a>
          </li>
          <li className='text-xl font-semibold'>
            <a href='#'>Testimonials</a>
          </li>
        </ul>

        
      </div>
      <div className='flex flex-col bg-orange-50 justify-between py-24 px-24'>
      <p className='text-xl font-semibold'>
        © 2022 ManageWise, Inc.
        </p>


      </div>
    </>
  )
}

export default Footer