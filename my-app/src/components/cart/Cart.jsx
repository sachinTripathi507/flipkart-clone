import { Box, Button, Grid, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import TotalBalance from './TotalBalance';
import CartItem from './CartItem';
import { deleteItemFromCart } from '../../Redux/Action/cartActions';
import EmptyCart from './EmptyCart';
import { useNavigate } from 'react-router-dom'

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));
const BtnWrapper = styled(Box)`
padding: 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb(000/10%);
border-top: 1px solid #f0f0f0;
`;
const Styledbtn = styled(Button)`
background: #fb641b;
color:#fff;
display:flex;
margin-left: auto;
width: 250px;
height:51px;
border-radius: 2px;

`;
const Header = styled(Grid)`
padding:15px 24px;`

const Cart = () => {
    const navigate = useNavigate();
    const [qty, setqty] = useState();
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    const RemoveItemFromCart = (id) => {
        dispatch(deleteItemFromCart(id));
    }
    const handleplacenow = () => {
        navigate('/BuyNow');
    }
    let total_Cart_items = 0;
    let total_cart_price = 0;
    let discount = 0;
    return (
        <>
            {cartItems.length > 0 ?
                <Component container spacing={2}>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header style={{ background: "#fff" }}>
                            <Typography >cart item ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map((item) => {
                                total_Cart_items = total_Cart_items + 1;
                                total_cart_price = total_cart_price + (item.price.cost * item.quantity);
                                discount = discount + ((item.price.cost * item.quantity) / 10);
                                return <CartItem key={item._id} item={item} RemoveItemFromCart={RemoveItemFromCart} />
                            })

                        }
                    
                        <BtnWrapper>
                            <Styledbtn onClick={() => handleplacenow()} sx={{ '&:hover': { backgroundColor: 'orange' }, '&:active': { backgroundColor: 'orange' } }}>place order</Styledbtn>
                        </BtnWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12} >
                        <TotalBalance item={cartItems}  total_Cart_items={total_Cart_items} total_cart_price={total_cart_price}  discount={ discount}/>
                    </Grid>
                </Component>
                : <EmptyCart />
            }
        </>
    )
}
export default Cart; 
