import React from 'react'
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Categorymanu from './Categorymanu';
import { StyledTextField } from '../../../muiTheme/TextField';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Grid from '@mui/material/Grid';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import {  orange } from '@mui/material/colors';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';


const settings = [{name:'Profile', icons: < Person2RoundedIcon/>}, {name:'Account', icons: < AdminPanelSettingsRoundedIcon/>}, {name:'Settings', icons: <SettingsRoundedIcon />}, {name:'Logout', icons: <LogoutRoundedIcon />}];
const Manuber = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <>
            <AppBar color='warning' position='static' sx={{ boxShadow: 'none' }}>
                <Box component={'div'} sx={{ width: { lg: '90%', xs: '100%' }, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                    <Toolbar sx={{ width: '10%' }}>
                        <Typography sx={{ fontSize: '1.8rem' }} variant='h4'>
                            MegaShop
                        </Typography>
                    </Toolbar>
                    <Toolbar sx={{ width: '40%' }}>
                        <StyledTextField
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                )
                            }}
                            size='small'
                            sx={{ backgroundColor: 'white' }}
                            fullWidth variant="outlined" />
                    </Toolbar>
                    <Toolbar sx={{ width: '40%' }}>
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <LoopRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Product </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Compaire</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <FavoriteBorderRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Favrate </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Wishlist</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <AccessibilityNewIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Login </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">My Account</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <ShoppingCartRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Cart </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">$1000</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar sx={{ bgcolor: orange[400] }} alt="Remy Sharp" src="https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <IconButton>{setting.icons}</IconButton>
                                                <Typography sx={{padding: '5px 20px'}} textAlign="center">{setting.name}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Box>
                <Toolbar>
                    <Categorymanu />
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Manuber