import React from 'react';


const Product = ({match}) => {
    const productId=match.params.id;
    const product=products.find((p)=>p.id===Number(productId));
  return (
    <div className="container">
       <h2>{product.name}</h2>
       <p>Price: ${product.price}</p> 
       <button>Add to cart</button>     
    </div>
  );
};

export default Product;
