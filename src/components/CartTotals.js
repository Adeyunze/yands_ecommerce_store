import React from 'react';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <section>
      <div className='flex justify-end items-end flex-col mt-5'>
        <div className='w-fit border rounded p-7'>
          <h5 className='bottom_total'><strong>Subtotal: </strong> <span className='font-sans'>{`£${total_amount}`}</span> </h5>
          <h5 className='bottom_total'><span className='text-md'>Shipping fee: </span> <span className='font-sans'> {`£${shipping_fee}`}</span></h5>
          <hr />
          <h5 className='bottom_total text-2xl'><strong>Total: </strong> <span className='font-sans'>£{total_amount + shipping_fee}</span> </h5>
        </div>
        <Link to='/checkout' className='bg-sky-600 mt-7 text-white sm:w-[330px] text-sm w-[100%] py-2 px-7 rounded flex justify-center items-center uppercase'>
          proceed to checkout
        </Link>
      </div>
    </section>
  )
}

export default CartTotals