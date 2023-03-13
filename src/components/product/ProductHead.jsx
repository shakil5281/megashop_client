import React from 'react'
import {  Box,  Typography } from '@mui/material'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Grid from '@mui/material/Grid';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import PercentIcon from '@mui/icons-material/Percent';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';



const ProductHead = () => {
    return (
        <>
            <Box sx={{padding: 8}}>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="right">
                            <Grid item>
                                <LocalShippingTwoToneIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Free Shiping </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">From all orders over $100 </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <CardGiftcardTwoToneIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Daily Surprise offers </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">Save Up to 20% off</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <HeadsetMicTwoToneIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Support 24/7 </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">Shop with an expert</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <PercentIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body"> Affordable Prices </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">Del Factory Direct price</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                    <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <MonetizationOnTwoToneIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body"> Sucure Payments </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2"> 100% protected payment</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductHead