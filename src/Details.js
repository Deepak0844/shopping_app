import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as React from 'react';
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';

export function Details({cart,setCart}){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/products/${id}`)
      .then((data) => data.json())
      .then((prd) => setProduct(prd));
  }, [id]);
  return product ? <CartList cart={cart} setCart={setCart} product={product} /> : "";

}



function CartList({cart,setCart,product}) {
  const history = useHistory();
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [Price, setPrice] = useState(product.price);
  const [id, setId] = useState(product.id);
  const addCartBtn=()=>{
    setName(product.name)
    setImage(product.image)
   setPrice(product.price)
   setId(product.id)
   const cartList = {
      name,
      image,
      Price,
      id,
   }
 setCart([...cart,cartList])
  history.push("/cart")
  }
  return (
    <section>
      <h1>{product.brand}</h1>
   <div className="productDetails" >
   <div>
    <h2>{product.name}</h2>
    <h4>{product.software}</h4>
    <h4>{product.specification}</h4>
    <h4>{product.body}</h4>
    <h4>{product.released}</h4>
    <div className="cartBtn">
    <Button onClick={addCartBtn} variant="contained" color="warning" style={{textAlign:"center"}}>Add To Cart</Button>
    <Button onClick={()=>{history.push("/edit-product/"+product.id)}}  variant="contained" color="success" style={{textAlign:"center"}} startIcon={<EditIcon />}>Edit</Button>
    </div>
  </div>
    <div>
       <img className="productImg" src={product.image} alt={product.name}></img>
  </div>
    </div>
    </section>
  );
}