import React, { useState, useContext } from 'react'
import { Dialog, styled, Box, Button, DialogContent, Typography, TextField } from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../../service/api.js';
import { Datacontext } from '../../context/Dataprovider';


const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
    overflow:hidden;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color:grey;
    height: 48px;
    border-radius: 2px;

`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 20px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 8px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 1;
    margin-top: 10px;
    font-weight: 600;
`
// height: 70vh;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 90% no-repeat;
    width: 30%;
    height: 80%;

    padding: 45px 35px;
    & > p, & > h6 {
        color: #FFFFFF;
        font-weight: 500
        margin-top:10px;
    }
`;
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}


const LoginDialog = ({ open, setopen }) => {
    const handleClose = () => {
        setopen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error,setError] = useState(false);
    const { setAccount } = useContext(Datacontext);
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const signupUser = async () => {
        var response = await authenticateSignup(signup);
        if (!response) return;
        else {
            handleClose();
            setAccount(signup.username);
        }

    }
    const loginUser = async () => {

        let response = await authenticateLogin(login);
        // console.log(response)
        if (response) {
            setError(false);
            handleClose();
            setAccount(login.username);
            
        }
        else {
            setError(true);
            console.log("some error occured");


        };


    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h6">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                                {error && <Error>Please enter a valid Username or password</Error>}
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={loginUser} >Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper> :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                <LoginButton onClick={signupUser} >Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;