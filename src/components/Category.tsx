import './css/category.css';
import book_tiki from '../assets/images/nhasach-tiki.webp';
import home_life from '../assets/images/home-life.png';
import phone from '../assets/images/phone.png'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.jpg'
import QuickLinks from './QuickLinks';
import TopDeal from './TopDeal';

const Category = () => {
    return (
        <div className="wrapper-page container-main">
            <div className="list-categories">
                <ul className="categories-list">
                    <li className="category-item"><img src={book_tiki} />Nhà Sách Tiki</li>
                    <li className="category-item"><img src={home_life} />Nhà Cửa - Đời Sống</li>
                    <li className="category-item"><img src={phone} />Điện thoại - Máy tính bảng</li>
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