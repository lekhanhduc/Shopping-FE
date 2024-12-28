import freeship from '../assets/images/freeship-xtra.png';
import './css/topbar.css';

const Topbar = () => {
    return (
        <div className='content-topbar'>
            <span>Freeship từ đơn 45k, giảm nhiều hơn cùng</span>
            <img src={freeship} alt="Freeship" />
        </div>
    );
};

export default Topbar;
