import { Box, Typography } from '@mui/material';
import './css/benefits.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Replay30Icon from '@mui/icons-material/Replay30';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SellIcon from '@mui/icons-material/Sell';

const BenefitsBar = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography className='benefits-item' variant="body2">Cam kết</Typography>
            <Typography className='benefits-item' variant="body2"><VerifiedUserIcon color="primary" /> 100% hàng thật</Typography>
            <Typography className='benefits-item' variant="body2"><LocalShippingIcon color='primary' />Freeship mọi nơi</Typography>
            <Typography className='benefits-item' variant="body2"><CurrencyExchangeIcon color='primary' />Hoàn 200% nếu hàng giả</Typography>
            <Typography className='benefits-item' variant="body2"><Replay30Icon />30 ngày đổi trả</Typography>
            <Typography className='benefits-item' variant="body2"><AirportShuttleIcon />Giao nhanh 2h</Typography>
            <Typography className='benefits-item' variant="body2"><SellIcon />Giá siêu rẻ</Typography>
        </Box>
    );
}

export default BenefitsBar;