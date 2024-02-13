import React, { useState, useContext } from 'react'
import { Box, Button, Typography,styled,Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { Datacontext } from '../../context/Dataprovider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import DataProvider from '../../context/Dataprovider';


const ButtonBox = styled(Box)(({theme})=>({ 
display:'flex',
margin:'0 3% 0 auto',
'&>*':{
    marginRight:'40px !important',
    fontSize:'16px',
    texttransform:'none',
},
[theme.breakpoints.down('md')]:{
  display:'block',
}
}));

const Cartwrap = styled(Link)(({theme})=>({
  display:'flex',
  padding:'8px',
  color: 'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block',
  }
}))


const CustomButtons = () => {
  const [open, setopen] = useState(false);
  const { account, setAccount } = useContext(Datacontext);
  const {cartItems}= useSelector(state=>state.cart);
  const openDialog = () => {
    setopen(!open);
  }

  return (
    <ButtonBox>
      {
        account ? <Profile style={{marginTop:12, marginleft:3}} account={account} setAccount={setAccount}></Profile> :

          <Button variant='contained' style={{ height: '2em', marginTop: '.5em',marginLeft:'2em' }} onClick={openDialog}>Login</Button>
      }
      <Typography style={{ marginTop: 8, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 8 }}>more</Typography>
      <Cartwrap to={"/cart"}>
        <Badge  badgeContent={cartItems?.length} color="secondary">
        <ShoppingCartIcon />
        </Badge>
        <Typography style={{}}>Cart</Typography>
      </Cartwrap>
      <LoginDialog open={open} setopen={setopen} />
    </ButtonBox>
  )
}

export default CustomButtons