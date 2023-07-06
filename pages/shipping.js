import React from 'react'
// import Checkout from '../components/Checkout'
import Header from '../components/Header'

const shipping = () => {
  return (
    <>
      <Header title="Shipping Address"/>
      {/* <Checkout activeStep={1} /> */}
      <form
        className="mx-auto max-w-screen-md"
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus 
              required= 'Please enter full name'
          />
        
            <div className="text-red-500"></div>
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
              required ='Please enter address'
              
          />
            <div className="text-red-500"></div>
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city" required ='Please enter city'/>
            <div className="text-red-500 "></div>
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full"
            id="postalCode" required = 'Please enter postal code'
          />
            <div className="text-red-500 "></div>
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country" 
              required ='Please enter country'
          
          />
         
            <div className="text-red-500 "></div>
       
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </>
  )
}

export default shipping
