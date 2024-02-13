import React,{useState} from 'react'
import { Box, Typography, Button, styled } from '@mui/material'
import {addellipse} from '../../utils/common-utils.js';
import GroupButton from './ButtonGroup.jsx';
const Container = styled('Box')`
display: flex;
border-top: 1px solid #f0f0f0;
flex-wrap: nowrap;
background: #fff;


`;
const Left = styled(Box)`
margin:20px;
display: flex;
flex-direction: column;

`;
const SmallText = styled(Typography)`
color: #878787;
font-size:14px;
margin-top:10px;
`;

const RemoveButton = styled(Button)`
margin-top:20px;
font-weight:600px;
font-size:18px;
color: black;
`;

const CartItem = ({ item,RemoveItemFromCart }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const[count,setCount]= useState(item.quantity);
  return (
    <>
      <Container>
        <Left>
          <img src={item.url} alt="product" style={{width:'100px'}}/>
          <GroupButton count={count} setCount={setCount}/>
        </Left>

        <Box style={{margin:20}} >
          <Typography>{addellipse(item.title.longTitle)}</Typography>
          < SmallText>Seller:DetailNet
            <Box component='span'><img src={fassured} alt='assured' style={{ width: 50, marginLeft: 10 }} /></Box>
          </ SmallText>
          <Typography>
            <span style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
          </Typography>
          <RemoveButton onClick={()=>RemoveItemFromCart(item.id)}>Remove</RemoveButton>
        </Box>
      </Container>
    </>
  )
}

export default CartItem;