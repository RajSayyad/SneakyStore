import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} =useContext(ShopContext);
    const [bestSeller, setBestSeller] =useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=> item.bestSeller);
        setBestSeller(bestProduct)
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Michael Jordan's collaboration with Nike began in 1984, leading to the launch of the iconic Air Jordan sneaker line, which revolutionized basketball footwear and culture.
            </p>
        </div>
        <div className='grid grid-cols-1 sm-grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem 
                    key={index} 
                    id={item._id} 
                    name={item.name} 
                    image={item.image} 
                    price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller