import React, { Fragment, useState } from "react";
import {
  AppBar,
  Hidden,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../store/UserSlice";

const Header = ({username}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleLogout = () => {
    navigate('/'); 
    setAnchorEl(null);
    setOpen(false);
    dispatch(clearUser());
  };

  return (
    <Fragment>
      <Hidden mdDown>
        <AppBar
          sx={{ boxShadow: "none", borderBottom: "1px solid gray" }}
          color={"white"}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Stack
              display={{ xs: "none", sm: "none", md: "flex" }}
              direction={"row"}
              spacing={4}
            >
              <Typography variant="h5" color={"secondary"}>
                Chat with us
              </Typography>
              <Typography variant="h5">+420 336 775 664</Typography>
              <Typography variant="h5">info@freshnesecom.com</Typography>
            </Stack>

            <Stack direction={"row"} spacing={5}>
              <Typography variant="h5" color={"secondary"}>
                Blog
              </Typography>
              <Typography variant="h5" color={"secondary"}>
                About Us
              </Typography>
              <Typography variant="h5" color={"secondary"}>
                Careers
              </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </Hidden>

      <AppBar
        color={"white"}
        position={"relative"}
        sx={{ boxShadow: "none", border: "none", top: "4rem" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <Stack xs={6} sm={6} md={6}>
            <Typography variant="h1">Freshnesecom</Typography>
          </Stack>

          <Stack spacing={4} xs={6} sm={6} md={6} direction={"row"}>
            <IconButton color="primary" sx={{padding : 0}} onClick={handleClick}>
              <PersonIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>

            {username ? (
              <Fragment>
                <MenuItem onClick={handleClose}>{username}</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Fragment>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
            )}
            </Menu>

            <IconButton color="primary" sx={{padding : 0}}>
            <ShoppingBasketIcon />
            </IconButton>

          </Stack>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
