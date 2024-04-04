'use client';
import MainLayout from '@/layouts/main/index';
import { Box, Button, Card, Divider, Fade, Grid, Modal, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1ab394',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // Add more data as needed
];
const row1 = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)];

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [add, setAdd] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MainLayout>
            <Grid container spacing={2} sx={{ my: 3, px: 3 }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ width: '100%' }}>
                        <Box sx={{ m: 1, display: 'flex', width: '100%', px: 3, gap: 10 }}>
                            <TextField label='Бар кодоор хайх' id='outlined-size-small' size='medium' fullWidth />
                            <TextField label='Нэрээр хайх' id='outlined-size-small' size='medium' fullWidth />
                        </Box>
                        <TableContainer
                            sx={{
                                minHeight: 'calc(100vh - 200px)',
                                maxHeight: 'calc(100vh - 200px)',
                                overflow: 'auto',
                                '&::-webkit-scrollbar': { backgroundColor: '#f2f2f2' },
                            }}
                        >
                            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                                <TableHead style={{ position: 'sticky', top: 0, zIndex: 99 }}>
                                    <TableRow>
                                        <StyledTableCell>Нэр</StyledTableCell>
                                        <StyledTableCell align='left'>Үнэ</StyledTableCell>
                                        <StyledTableCell align='left'>Код</StyledTableCell>
                                        <StyledTableCell align='left'>Тоо ширхэг</StyledTableCell>
                                        <StyledTableCell align='left'>Үйлдэл</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name} hover>
                                            <StyledTableCell component='th' scope='row'>
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align='left'>{row.calories}</StyledTableCell>
                                            <StyledTableCell align='left'>{row.fat}</StyledTableCell>
                                            <StyledTableCell align='left'>
                                                <TextField
                                                    label='Тоо'
                                                    id='outlined-size-small'
                                                    defaultValue='1'
                                                    size='small'
                                                    type='number'
                                                    sx={{ width: '100px' }}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell align='left'>{row.protein}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ m: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3 }}>
                            <Typography variant='h6' fontWeight={700} sx={{ fontFamily: 'monospace' }}>
                                Цуглуулсан бараанууд
                            </Typography>
                            <Button variant='outlined'>Сагс цэвэрлэх</Button>
                        </Box>
                        <Box sx={{ m: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3 }}>
                            <TextField label='Харилцагч байгууллагаар' id='outlined-size-small' size='medium' />
                            <Box sx={{ display: 'flex' }}>
                                <Button variant='contained' sx={{ mr: 2, bgcolor: '#1ab394' }}>
                                    Хайх
                                </Button>
                                <Button variant='contained' color='secondary' onClick={handleOpen}>
                                    Үргэлжлүүлэх
                                </Button>
                            </Box>
                        </Box>
                        <Card sx={{ flexGrow: 1 }}>
                            <TableContainer
                                sx={{
                                    overflow: 'auto',
                                    '&::-webkit-scrollbar': { backgroundColor: '#f2f2f2' },
                                }}
                            >
                                <Table sx={{ minWidth: 700 }}>
                                    <TableHead style={{ position: 'sticky', top: 0, zIndex: 99 }}>
                                        <TableRow>
                                            <StyledTableCell>Бүтээгдэхүүний нэр</StyledTableCell>
                                            <StyledTableCell align='left'>Савлагаа/Хэмжээ</StyledTableCell>
                                            <StyledTableCell align='left'>Тоо ширхэг</StyledTableCell>
                                            <StyledTableCell align='left'>Нэгж үнэ</StyledTableCell>
                                            <StyledTableCell align='left'>Нийт үнэ</StyledTableCell>
                                            <StyledTableCell align='left'>Устгах</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row1.map((row) => (
                                            <StyledTableRow key={row.name} hover>
                                                <StyledTableCell component='th' scope='row'>
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align='left'>{row.calories}</StyledTableCell>
                                                <StyledTableCell align='left'>{row.fat}</StyledTableCell>
                                                <StyledTableCell align='left'>
                                                    <TextField
                                                        label='Тоо'
                                                        id='outlined-size-small'
                                                        defaultValue='1'
                                                        size='small'
                                                        type='number'
                                                        sx={{ width: '100px' }}
                                                    />
                                                </StyledTableCell>
                                                <StyledTableCell align='left'>{row.protein}</StyledTableCell>
                                                <StyledTableCell align='left'>{row.protein}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

            <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Card>
                        <Box sx={style}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant='h6' gutterBottom>
                                    Борлуулалтын мэдээлэл
                                </Typography>
                                <div style={{ cursor: 'pointer' }} onClick={handleClose}>
                                    <CloseIcon />
                                </div>
                            </Box>

                            <Divider />

                            <Stack sx={{ my: 2, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Typography variant='body2' fontWeight={700}>
                                    Худалдан авагч
                                </Typography>
                                <p>Тодорхойгүй</p>
                            </Stack>
                            <Divider />
                            <Stack sx={{ my: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Typography variant='body2' fontWeight={700}>
                                    Нийт үнийн дүн
                                </Typography>
                                <p>8,000₮</p>
                            </Stack>
                            <Divider />
                            <Stack sx={{ my: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Typography variant='body2' fontWeight={700}>
                                    Гишүүнчлэлийн хөнгөлөлт
                                </Typography>
                                <p> 0%</p>
                            </Stack>
                            <Divider />
                            <Stack sx={{ my: 3, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Typography variant='body2' fontWeight={700}>
                                    Нийт төлөх дүн{' '}
                                </Typography>
                                <p>8,000₮</p>
                            </Stack>
                            <Divider sx={{ mb: 4 }} />
                            <FormControl>
                                <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
                                    <FormControlLabel value='female' control={<Radio />} label='Бэлэн мөнгөөр' />
                                    <FormControlLabel value='male' control={<Radio />} label='Дансаар' />
                                    <FormControlLabel value='other' control={<Radio />} label='Посс-оор' />
                                </RadioGroup>
                            </FormControl>
                            <TextField label='Дүн' id='outlined-size-small' size='medium' fullWidth sx={{ my: 2 }} />
                            <Button
                                variant='contained'
                                size='small'
                                sx={{ mr: 2, bgcolor: '#1ab394', justifyContent: 'flex-end', display: 'flex', alignItems: 'flex-end' }}
                                onClick={() => setAdd(!add)}
                            >
                                Нэмэлт дүн
                            </Button>
                            {add && <TextField label='Нэмэлт дүн' id='outlined-size-small' size='medium' fullWidth sx={{ my: 2 }} />}
                        </Box>
                    </Card>
                </Box>
            </Modal>
        </MainLayout>
    );
};

export default HomePage;
