import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({theme}) => ({
  display:"flex",
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  alignItems:"center",
  width:"40%"
}))

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs: "none", sm:"block"}}}>MERT DEV</Typography>
        <PetsIcon sx={{display: {xs: "block", sm:"none"}}}/>
        <Search><InputBase placeholder="search..."/>Search</Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={e => setOpen(true)} src="https://www.w3schools.com/howto/img_avatar.png" sx={{width:30, height:30}}/>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" sx={{width:30, height:30}}/>
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar