import { useState } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import { ProductList } from './ProductList';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export function Product() {
  const [product, setProduct] = useState([]);
  const getProducts = () => {
    fetch("https://6166c4db13aa1d00170a66fd.mockapi.io/products")
      .then((data) => data.json())
      .then((prd) => setProduct(prd));
  };
  useEffect(getProducts, [product.id]);

  const deleteItm=(id)=>{
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/products/${id}`,
        {method:"DELETE",
}).then(()=>getProducts());
  }
  return (
    <div className="productContainer">
      {product.map(({brand, image, id, rating, name,price }) => (
        <ProductList
          image={image}
          brand={brand}
          rating={rating}
          price={price}
          name={name}
          id={id}
          key={id}
          deleteBtn={
            <Button onClick={()=>{deleteItm(id)}}><DeleteIcon color="error"/></Button>
          }
          />
      ))}
    </div>
  );
}