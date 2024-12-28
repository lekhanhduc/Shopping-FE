import { Grid, Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import top_deal from '../assets/images/top-deal.png';

const products = [
    {
        id: 1,
        title: 'Đừng Việc',
        price: '91.300đ',
        originalPrice: '125.000đ',
        discount: '-27%',
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzsex67h4iap78_tn',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 2,
        title: 'Bộ Hộp Cơm Giữ Nhiệt',
        price: '884.000đ',
        originalPrice: '1.699.000đ',
        discount: '-48%',
        image: 'https://pos.nvncdn.com/5c7368-24528/ps/20220804_3NUETzUjuU4T8qFAO8byS2RU.jpeg',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 3,
        title: 'Đừng Việc',
        price: '91.300đ',
        originalPrice: '125.000đ',
        discount: '-27%',
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzsex67h4iap78_tn',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 4,
        title: 'Bộ Hộp Cơm Giữ Nhiệt',
        price: '884.000đ',
        originalPrice: '1.699.000đ',
        discount: '-48%',
        image: 'https://pos.nvncdn.com/5c7368-24528/ps/20220804_3NUETzUjuU4T8qFAO8byS2RU.jpeg',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 5,
        title: 'Đừng Việc',
        price: '91.300đ',
        originalPrice: '125.000đ',
        discount: '-27%',
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzsex67h4iap78_tn',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 6,
        title: 'Bộ Hộp Cơm Giữ Nhiệt',
        price: '884.000đ',
        originalPrice: '1.699.000đ',
        discount: '-48%',
        image: 'https://pos.nvncdn.com/5c7368-24528/ps/20220804_3NUETzUjuU4T8qFAO8byS2RU.jpeg',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 5,
        title: 'Đừng Việc',
        price: '91.300đ',
        originalPrice: '125.000đ',
        discount: '-27%',
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzsex67h4iap78_tn',
        delivery: 'Giao thứ 3, 31/12',
    },
    {
        id: 6,
        title: 'Bộ Hộp Cơm Giữ Nhiệt',
        price: '884.000đ',
        originalPrice: '1.699.000đ',
        discount: '-48%',
        image: 'https://pos.nvncdn.com/5c7368-24528/ps/20220804_3NUETzUjuU4T8qFAO8byS2RU.jpeg',
        delivery: 'Giao thứ 3, 31/12',
    },
];

const TopDeal = () => {
    return (
        <Box className="top-deal-container" sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            {/* Header */}
            <Box className="thumbnail-topdeal" sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={top_deal} alt="Top Deal" style={{ height: '40px', marginRight: '10px' }} />
                <Typography variant="h5" fontWeight="bold" color="secondary">
                    Top Deal - Siêu Rẻ
                </Typography>
            </Box>

            {/* Product Grid */}
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.title}
                            />
                            <CardContent>
                                <Typography variant="body1" fontWeight="bold">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.delivery}
                                </Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Typography variant="h6" color="error" display="inline">
                                        {product.price}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        display="inline"
                                        sx={{ textDecoration: 'line-through', marginLeft: '10px' }}
                                    >
                                        {product.originalPrice}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button variant="outlined" sx={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                Xem tất cả
            </Button>
        </Box>
    );
};

export default TopDeal;
