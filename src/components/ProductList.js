import React from 'react';
import { Link } from 'react-router-dom';


const products=[
    {id:1,name:'Iphone',price:60000},
    {id:2,name:'Iphone Pro',price:70000}
]
const ProductList = () => {
  return (
    <div className="container">
       <h2>Productlist</h2> 
       <ul className="products_list">
        {products.map
        ((product) => (
            <li key={product.id}>
                <Link to={'/products/${product.id}'}>{product.name}</Link> -${product.price}
            </li>
        ))};
        </ul>     
    </div>
  );
};

export default ProductList;
