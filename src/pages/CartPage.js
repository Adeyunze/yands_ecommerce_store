import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import BreadCrumbs from '../components/BreadCrumbs';
import CartItems from '../components/CartItems';
import CartColumns from '../components/CartColumns';
import CartTotals from '../components/CartTotals';
import '../styles/Cart.css'

const CartPage = () => {
  const { cart, clearCart } = useCartContext();
  if(cart.length < 1) {
    return (
      <>
        <BreadCrumbs page={"Cart"} />
        <div className='h-[60vh] flex flex-col justify-center items-center'>
            <h2 className='text-xl font-meduim'>Your cart is empty</h2>
            <Link to='/' className='bg-sky-600 mt-7 text-white sm:w-[130px] text-sm py-2 px-2 rounded flex justify-center items-center uppercase'>
              fill it
            </Link>
          </div>
      </>
    )
  }
  return (
    <div className=''>
      <BreadCrumbs page={"Cart"} />
      <section className='my-24 xl:mx-24 mx-6'>
        <CartColumns/>
        <CartItems/>
        <div className='mt-6 flex justify-end'>
        <button className='bg-sky-500 text-white p-2 rounded text-sm tracking-wide' onClick={() => clearCart()}>Clear Shopping Cart</button>
        </div>
        <CartTotals/>
      </section>
    </div>
  )
}

export default CartPage