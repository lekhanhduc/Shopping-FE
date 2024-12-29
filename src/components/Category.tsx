import './css/category.css';
import book_tiki from '../assets/images/nhasach-tiki.webp';
import home_life from '../assets/images/home-life.png';
import phone from '../assets/images/phone.png'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.jpg'
import QuickLinks from './QuickLinks';
import TopDeal from './TopDeal';
import toys from '../assets/images/toys.png';
import digital_device from '../assets/images/digital _device.png';
import household from '../assets/images/household.png';
import beautify from '../assets/images/beautify.png';
import sport from '../assets/images/sport.png';

const Category = () => {
    return (
        <div className="container-main">
            <div className="list-categories">
                <ul className="categories-list">
                    <li className="category-item"><img src={book_tiki} />Nhà Sách Tiki</li>
                    <li className="category-item"><img src={home_life} />Nhà Cửa - Đời Sống</li>
                    <li className="category-item"><img src={phone} />Điện thoại - Máy tính bảng</li>
                    <li className="category-item"><img src={toys} />Đồ chơi - Mẹ & Bé</li>
                    <li className="category-item"><img src={digital_device} />Thiết bị số - Phụ kiện số</li>
                    <li className="category-item"><img src={household} />Điện gia dụng</li>
                    <li className="category-item"><img src={beautify} />Làm đẹp - Sức khỏe</li>
                    <li className="category-item"><img src={sport} />Thể thao - Dã ngoại</li>
                </ul>
            </div>

            <div className="container_widgets">
                <div className="widget-banner">
                    <div className="banner-content">
                        <img src={banner1} alt="Logo" className="brand-logo" />
                        <img src={banner2} alt="Banner" className="banner-image" />
                    </div>
                </div>
                <QuickLinks />
                <TopDeal />
            </div>
        </div>
    );
}

export default Category;