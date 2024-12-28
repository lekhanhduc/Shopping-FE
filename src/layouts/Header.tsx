import logo_tiki from '../assets/images/logo-tiki.png';
import './css/header.css';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div id="header-page">
            <div className="wrapper-page">
                <div className='container-header'>

                    <div className='logo-header'>
                        <img src={logo_tiki} alt="Logo-tiki" />
                        <span>Tốt & Nhanh</span>
                    </div>

                    <div className='search-form'>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm, dịch vụ..."
                            />
                            <Button className="search-button" variant="text">
                                <SearchIcon color="primary" />
                            </Button>
                        </div>
                    </div>

                    <div className="icon-text-container">
                        <div className="icon-item">
                            <HomeIcon color="primary" />
                            <p>Trang chủ</p>
                        </div>
                        <div className="icon-item">
                            <AdminPanelSettingsIcon color="primary" />
                            <p>Tài khoản</p>
                        </div>
                        <div className="icon-item">
                            <AddShoppingCartIcon color="primary" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
