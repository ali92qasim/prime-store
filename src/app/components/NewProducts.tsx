import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
  {
    title: "Shirt",
    desc: 'Pure Denim Shirt',
    rating: 4.0,
    price: 29.99,
    imageUrl: '/t-shirt.jpg',
  },
  {
    title: "Sports",
    desc: 'Running Shoes',
    rating: 3.0,
    price: 85.29,
    imageUrl: '/t-shirt.jpg',
  },
  {
    title: "Watch",
    desc: 'Smart Watch Series 7',
    rating: 4.0,
    price: 17.99,
    imageUrl: '/t-shirt.jpg',
  },
  {
    title: 'Perfume',
    desc: 'Eau de Parfum', 
    rating: 2.0,
    price: 99.99, 
    imageUrl: '/t-shirt.jpg',
  },
  {
    title: 'Bag',
    desc: 'Leather Handbag',
    rating: 5.0,
    price: 79.99,
    imageUrl: '/t-shirt.jpg',
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start
         sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts;