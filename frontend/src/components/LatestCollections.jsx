import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
//import { products } from '../assets/assets';
const LatestCollections = () => {
    const {products} =useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);;
    useEffect(()=>{
        if (products && products.length) {
            // Take the first 3 products
            setLatestProducts(products.slice(0, 3));
        }
    }, [products]);

  return (
    <div className='my-10'>

        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST '} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Michael Jordan's collaboration with Nike began in 1984, leading to the launch of the iconic Air Jordan sneaker line, which revolutionized basketball footwear and culture.
            </p>
        </div>
        {/*Rendering Products*/}
        <div className='grid grid-cols-1 sm-grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem 
                    key={index}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollections