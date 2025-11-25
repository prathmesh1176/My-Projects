import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({ filterProducts }) => {
  console.log("ProductList received:", filterProducts);

  return (
    <ul className='flex flex-wrap gap-4 justify-center'>
      {filterProducts.length === 0 ? (
        <p className="text-gray-600 mt-10">No products found</p>
      ) : (
        filterProducts.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))
      )}
    </ul>
  );
}

export default ProductList;
