import React from 'react';

// material-ui
import { Link, Typography, Stack } from '@material-ui/core';

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" component={Link} href="https://berrydashboard.io" target="_blank" underline="hover">
            &copy; By Ahmed Aziz Khedira, Mohamed Ben Hamouda, Mohamed Alaa Turki, Rihem Taboubi, Mohamed Khalil Ben Gaied, Mohamed Saad Kchaou.
            </Typography>
        </Stack>
    );
};

export default AuthFooter;
