import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-evenly h-[300px] mt-10 mb-20 items-center'>
      
    {/* 1st div  */}
      <div className=''>
        <h1 className='text-2xl'>Exclusive</h1>
        <ul>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
        </ul>
      </div>


{/* 2nd div  */}
      <div>
        <h1>Support</h1>
        <ul>
          <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>

      {/* 3rd div  */}
      <div>
        <h1>Account</h1>
        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>

      {/* 4th div  */}

      <div><h1>Quick Link</h1>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li></ul></div>


    </div>
  )
}

export default Footer
