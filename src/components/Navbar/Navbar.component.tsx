import './navbar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../reduxComponent/cartContext';


function NavbarComponent(){
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const cartContext = React.useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean> (false);


  React.useEffect(()=>{
    const userData = localStorage.getItem('user');
    if(userData && JSON.parse(userData)){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  })

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/signin';
  }

  if (!cartContext) {
    return null;
  }

  const { cartCount } = cartContext;

    return (
        <AppBar position="static" className='navbar'>
          <Container maxWidth="xl">
            <Toolbar disableGutters className='justify-between'>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                    <MenuItem  onClick={handleCloseNavMenu}>
                      <Router>
                        <a href="/" className='link'><Typography textAlign="center"> coffee shop </Typography></a>
                        <a href="/products" className='link'><Typography textAlign="center"> Products </Typography></a>
                        <a href="/about-us" className='link'><Typography textAlign="center"> About Us </Typography></a>
                      </Router>
                    </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{maxWidth: '25em'}}>
                  <Router>
                    <a href="/" className='link'><Typography textAlign="center"> coffee shop </Typography></a>
                    <a href="/products" className='link'><Typography textAlign="center"> Products </Typography></a>
                    <a href="/about-us" className='link'><Typography textAlign="center"> About Us </Typography></a>
                  </Router>
              </Box>


              <Box sx={{ flexGrow: 0, position:'relative' }} className="flex-nav">
                <a href='/cart' className='shopping-icon'><ShoppingCartIcon /> {cartCount > 0 && <span className='round'>{cartCount}</span>}  &#12644;</a>
                
                {
                  isLoggedIn ? <div className="logout" onClick={handleLogOut}> Logout</div> : <div className="flex">
                    <a href='/signin' className='link'> SignIN</a>
                    <a href='/signup' className='link'> SignUP</a>
                  </div>
                }
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
export default NavbarComponent;
