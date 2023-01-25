/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components'
import BreadCrumbs from '../components/BreadCrumbs';
import StripeCheckout from '../components/StripeCheckout';


import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <BreadCrumbs page='checkout'/>
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='h-[60vh] flex flex-col justify-center items-center'>
            <h2 className='text-xl font-meduim'>Your cart is empty</h2>
            <Link to='/' className='bg-sky-600 mt-7 text-white sm:w-[130px] text-sm py-2 px-2 rounded flex justify-center items-center uppercase'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage