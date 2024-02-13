import React, { useState } from 'react'
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { addCart } from '../../Redux/Action/cartActions';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '30px 0 0 60px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 0px 15px 20px',
    border: '1px solid #f0f0f0',
    width: '93%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;
function ActionItem({product}) {
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const [quant,setquant]= useState(1);
    const {id}= product;
    const addItemToCart=()=>{
       dispatch(addCart(id,quant))
        navigate('/cart');
    }
    const BuyNow=()=>{
        navigate('/BuyNow');
    }
  return (
    <LeftContainer>
    <Image src={product.detailUrl} /><br />
    <StyledButton onClick={()=>addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
    <StyledButton onClick={()=>BuyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
</LeftContainer>
  )
}

export default ActionItem