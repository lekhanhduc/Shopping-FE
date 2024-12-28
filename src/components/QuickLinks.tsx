import './css/quicklink.css'
import like from '../assets/images/like.png';
import trading from '../assets/images/trading.png';
import coupon from '../assets/images/coupon.png';
import clearance_sale from '../assets/images/xakho.png';
import foreign_goods from '../assets/images/hangngoai.png';
import baby_and_mother from '../assets/images/mevabe.jpg';
import book_tiki from '../assets/images/motsachtiki.jpg';
import technology from '../assets/images/congnghe.jpg';
import kitchen from '../assets/images/bep.jpg';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (

        <div className='container-quick'>
            <div>
                <img src={like} alt="TOP DEAL" />
                <Link to='/'><span>TOP DEAL</span></Link>
            </div>
            <div>
                <img src={trading} alt="TOP DEAL" />
                <Link to='/'><span>Trading</span></Link>
            </div>
            <div>
                <img src={coupon} alt="TOP DEAL" />
                <Link to='/'><span>Siêu hot</span></Link>
            </div>
            <div>
                <img src={clearance_sale} alt="TOP DEAL" />
                <Link to='/'><span>Xả kho</span></Link>
            </div>
            <div>
                <img src={foreign_goods} alt="TOP DEAL" />
                <Link to='/'><span>Hàng ngoại</span></Link>
            </div>

            <div>
                <img src={baby_and_mother} alt="TOP DEAL" />
                <Link to='/'><span>Chăm bé</span></Link>
            </div>

            <div>
                <img src={book_tiki} alt="TOP DEAL" />
                <Link to='/'><span>Sách</span></Link>
            </div>

            <div>
                <img src={technology} alt="TOP DEAL" />
                <Link to='/'><span>Công nghệ</span></Link>
            </div>
            <div>
                <img src={kitchen} alt="TOP DEAL" />
                <Link to='/'><span>Yêu bếp</span></Link>
            </div>
        </div>

    )
}

export default QuickLinks;