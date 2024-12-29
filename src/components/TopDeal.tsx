import { useState } from 'react';
import './css/topdeal.css';
import { Grid, Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import top_deal from '../assets/images/top-deal.png';
import useFetchProducts from '../hooks/useFetchProduct';

const TopDeal = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { products, loading } = useFetchProducts(currentPage);

    const handleClickNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };


    if (loading) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    return (
        <Box className="top-deal-container">
            <Box className="thumbnail-topdeal" sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={top_deal} alt="Top Deal" style={{ height: '40px' }} />
            </Box>

            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={`${product.id}-${currentPage}`}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.thumbnail || 'https://via.placeholder.com/150'}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="body1" fontWeight="bold">
                                    {product.name}
                                </Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Typography variant="h6" color="error" display="inline">
                                        {product.price}đ
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="outlined"
                sx={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                onClick={handleClickNextPage}
            >
                Xem tất cả
            </Button>
        </Box>
    );
};

export default TopDeal;
