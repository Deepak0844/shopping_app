import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';

export function ProductList({brand, image, name, id, price, rating,deleteBtn }) {
  const history = useHistory();
  const viewBtn = () => {
    history.push("/details/" + id);
  };

  return (
    <div className="products">
  <div>
  <img src={image} alt={brand}></img>
  </div>
   <div className="title">
      <p><b>{brand}</b></p>
      <p><StarIcon style={{fontSize:"20px"}} color="warning"/> {rating}</p>
    </div>
      <p>{name}</p>
      <p>₹{price}</p>
      <div>
      <Button onClick={viewBtn}>View</Button>
      {deleteBtn}
      </div>
  </div>
  );
}