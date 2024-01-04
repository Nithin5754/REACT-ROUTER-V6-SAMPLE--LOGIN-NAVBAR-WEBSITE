import { Link } from "react-router-dom";
import data from'../data'
import { useState } from "react";
import { UseglobalContext } from "../context";

const Products = () => {
const [isProduct,setProduct]=useState(data)


const d=UseglobalContext()

  return (
    <>
      <section className='section'>
      
    <ul style={{display:'flex' ,flexDirection:'row' ,gap:'10px'}}>
    {
        isProduct.map((product)=>{
          return(
            <li key={product.id} style={{width:'200px', height:'200px' ,backgroundColor:'gray',alignItems:'center',textAlign:'center'}}>
            <h3 style={{color:'white'}}>
                {product.name}

            </h3>
            <Link to={`/product/${product.id}`}>
            <button className="btn ">show details</button>
            
            </Link>
              </li>
          ) 
        })
      }
    </ul>

     

      </section>
    </>
  );
};

export default Products;
