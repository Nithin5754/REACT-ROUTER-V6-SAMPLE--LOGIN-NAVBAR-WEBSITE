import {useParams ,Link } from "react-router-dom";
import data from '../data'
import { useState } from "react";


const SingleProduct = () => {
  const {productId}=useParams()
  const products=data.find((product)=>product.id===productId)
  const {name,image,id}=products
  return (
    <section className='section product'>
        <Link to={'/product'}><button className="alert alert-danger">back product page</button></Link>
      
           
              <h1>{name}</h1>
              <img src={image} alt={name} />
    </section>
  );
};

export default SingleProduct;
