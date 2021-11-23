import './App.css';
import {Route, useHistory } from "react-router-dom";
import { Switch} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import { EditProduct } from './EditProduct';
import { AddProduct } from './AddProduct';
import { Details } from './Details';
import { Product } from './Products';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function App() {
const history = useHistory();
const addCart=[]
const [cart,setCart] = useState(addCart)
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
  return (
<div>
    <AppBar position="static" style={{color:"black",width:"100%",boxShadow:"none"}}>
      <Toolbar variant="dense">
        <Button variant="text" color="inherit" onClick={()=> history.push("/")}>
          Products
        </Button>
        <Button style={{minWidth:"120px"}}onClick={()=>history.push("/add-movie")} variant="text" color="inherit">
       Add Products
        </Button>
       <IconButton color="inherit" style={{marginLeft:"auto"}} onClick={()=>history.push("/cart")} aria-label="cart">
      <StyledBadge badgeContent={cart.length} showZero color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
      </Toolbar>
    </AppBar>
<Switch>
<Route exact path="/">
  <Product/>
 </Route>
 <Route path="/edit-product/:id">
 <EditProduct/>
 </Route>
 <Route path="/details/:id">
<Details cart={cart} setCart={setCart}/>
   </Route>
 <Route path="/add-movie">
 <AddProduct/>
 </Route>
 <Route path="/cart">
{/* cart page */}
   <div style={{textAlign:"center"}}>
     {cart.length!==0?//if cart length is not equal to 0 cart item shown
 cart.map(({ name, Price, image, id }, index) => (<Cart 
 key={index}
 id={id}
  name={name}
   price={Price}
    image={image}
    deleteBtn={<Button
     onClick={() => {
        const deleteIdx = index;
        const remainingItm = cart.filter((crt, idx) => idx !== deleteIdx);
        setCart(remainingItm);
      }}><DeleteIcon/></Button>}/>
      )) : //if cart length is  0 cart msg shown
      <div>
        <p>Cart is Empty</p>
      <Button onClick={()=>{history.push("/")}}>Back To Store</Button>
      </div>}
      </div>
{/* cart page */}
 </Route>
 </Switch>
 </div>
);
}

function Cart({deleteBtn,name,price,image,id}){
return(
  <section>
<div className="cartItem">
<img src={image} alt={name}></img>
<p>{name}</p>
<p>₹ {price}</p>
  {deleteBtn}
</div>
  </section>
)
}