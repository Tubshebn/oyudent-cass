'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { IconButton, InputAdornment } from '@mui/material';

function Copyright(props) {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            OYU DENT | Кассын систем 2022-2024 он ©
        </Typography>
    );
}

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image src='/Oyudent.svg' width={150} height={150} />
                <Typography component='h1' variant='h5'>
                    Cистемд нэвтрэх
                </Typography>
                <Box onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        name='email'
                        sx={{
                            backgroundColor: 'white', // Set background color to white
                            '& .MuiOutlinedInput-root.Mui-focused': {
                                // Target the focused state for the outlined input
                                borderColor: '#1ab394', // Change border color on focus
                            },
                        }}
                    />
                    <TextField
                        name='password'
                        fullWidth
                        sx={{
                            backgroundColor: 'white', // Set background color to white
                            '& .MuiOutlinedInput-root.Mui-focused': {
                                // Target the focused state for the outlined input
                                borderColor: '#1ab394', // Change border color on focus
                            },
                        }}
                    />
                    <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2, backgroundColor: '#1ab394' }}>
                        Нэвтрэх
                    </Button>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}
