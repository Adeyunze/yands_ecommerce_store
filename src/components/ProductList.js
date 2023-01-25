import React from 'react';
import { useEcommerceContext } from '../context/product_context';
import { Link } from 'react-router-dom';
import { useFavContext } from '../context/favourite_context';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import '../styles/Product.css';

const ProductList = ({section}) => {
  const { products} = useEcommerceContext();
  const { addToFavourite, favourite } = useFavContext();


  return (
    <div className='my-6 xl:mx-20 mx-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {products.filter(product => product.gender === `${section}`).map(product => {
          const {id, name, image, price, color} = product;
          
          const tempFav = favourite.find(item => item.id === id);
          return (
            <article key={id} className='relative'>
              <div className='absolute bottom-[70px] right-[10px] bg-white p-2 z-10 rounded-full border border-[#000] cursor-pointer' onClick={() => addToFavourite(id, name, image, price)}>
                {tempFav ? <BsHeartFill className='text-lg text-[#4A4A4A] bouncy' /> : <BsHeart className='text-lg' />}
              </div>
              <div className="group relative">
                <div className="w-full h-[30rem] bg-gray-200 rounded-md overflow-hidden group-hover:opacity-95 lg:h-[24rem]">
                  <img src={image} alt="Product-img" className='w-full h-full object-center object-cover lg:w-full lg:h-full' />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      <Link to={`/product/${id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-[#545454]">{color}</p>
                  </div>
                  <p className="font-sans text-sm font-medium text-gray-900">£{price}</p>
                </div>
              </div>
            </article>
          )
        })}
    </div>
  )
}

export default ProductList