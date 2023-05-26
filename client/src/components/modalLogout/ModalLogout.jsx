import './modalLogout.scss';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { makeRequest } from '../../axios';
const ModalLogout = ({ setOpenModal, user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setOpenModal(false);

        makeRequest
            .post('/auth/logout')
            .then((res) => {
                window.localStorage.setItem('user', null);
                navigate('/login');
                return res.data;
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className="modalLogout">
            <div className="block1">
                <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="userInfo">
                        <img src={'/upload/' + user.profilePic} alt="Ảnh đại diện" />
                        <span>{user.name}</span>
                    </div>
                </Link>
                <hr></hr>
                <div className="userAll">
                    <span>Xem tất cả trang cá nhân</span>
                </div>
            </div>
            <div className="block2">
                <div className="item">
                    <div className="icon">
                        <SettingsRoundedIcon />
                    </div>
                    <div className="menu">
                        <div className="item-1">
                            <span>Cài đặt & quyền riêng tư</span>
                        </div>
                        <div className="item-2">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <HelpIcon />
                    </div>
                    <div className="menu">
                        <div className="item-1">
                            <span>Trợ giúp và hỗ trợ</span>
                        </div>
                        <div className="item-2">
                            <ArrowForwardIosRoundedIcon />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <LogoutIcon />
                    </div>
                    <div className="menu">
                        <div className="item-1">
                            <span onClick={handleClick}>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogout;
