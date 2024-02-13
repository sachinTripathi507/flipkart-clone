import React from 'react'
import { Box, Typography,styled } from '@mui/material';

const Centre= styled(Box)`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center; 
height: 90vh;

`
const Para= styled(Typography)`
color: grey;
`

const BuyNow = () => {
    return (
        <Centre>
            <Para>This Action Is Under Developement,</Para>
            <Para>Will be available for you soon!!!!!</Para>

        </Centre>
    )
}

export default BuyNow;