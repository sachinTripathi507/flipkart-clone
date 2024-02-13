import React from 'react';
import { Box,styled,Typography } from '@mui/material';
import { navData } from '../../constants/Data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto 0 auto !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;
const Navbar = () => {
    return (
        <Box style={{backgroundColor: '#fff'}}>
        <Component>
            {
                navData.map(temp => (
                    <Container>
                        <img src={temp.url} style={{  width: 64 }} alt='cute dog' />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Component>
        </Box>
    )
}
            export default Navbar