import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Container } from '@mui/material';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  sx={{backgroundColor:"white"}}>
                <Toolbar>
                    <Container   maxWidth="lg">
                        <Typography variant="h6" color='primary' component="div" sx={{ flexGrow: 1 }}>
                            <Link href='/'>Blogs</Link>
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}