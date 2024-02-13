import React from 'react'
import { useState,useEffect } from 'react';
import {Box,Typography,styled} from '@mui/material'

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

// component: {
//     // width: '30%'
// },

const TotalBalance = ({item,count, discount,total_cart_price,total_Cart_items}) => {
//   const [price, setPrice] = useState(0);
    // const [discount, setDiscount] = useState(0)

    
   
    

  return (
    <>
    <Box style={{marginRight:"0 0 0 50px"}}>
    <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({item?.length} item)
                    <Price component="span">₹{total_cart_price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount.toFixed().toLocaleString('en-IN')}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{total_cart_price - discount + 40}</Price>
                </TotalAmount>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
    </Box>
    </>
  )
}

export default TotalBalance;