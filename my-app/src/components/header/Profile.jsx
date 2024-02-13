import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";



const Component = styled(Menu)`
    margin-top:5px;
`;
const Logout= styled(Typography)`
font-size:14px;
margin-left:8px;`

const Profile = ({ account,setAccount }) => {
    const [open, setopen] = useState(false);

    const handleClick = (event) => {
        setopen(event.currentTarget);
    }
    const handleClose = () => {
        setopen(false)
    }
    const logout=()=>{
        setAccount('');
        };
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{marginTop:2,cursor:'pointer'}}>
                    {account}
                </Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}>
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" margin-right="3px"/>
                    <Logout>logout</Logout>
                </MenuItem>

            </Component>
        </>
    )
}
export default Profile;