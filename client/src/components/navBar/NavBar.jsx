import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import ModalLogout from '../modalLogout/ModalLogout';

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = (e) => {
        setOpenModal(!openModal);
    };
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span>Social Network</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <HomeOutlinedIcon style={{ cursor: 'pointer' }} />
                </Link>
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: 'pointer' }} />
                )}
                <GridViewOutlinedIcon style={{ cursor: 'pointer' }} />
                <div className="search">
                    <SearchOutlinedIcon style={{ cursor: 'pointer' }} />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user" onClick={handleClick}>
                    <img src={'/upload/' + currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    {openModal && (
                        <ModalLogout
                            setOpenModal={setOpenModal}
                            user={JSON.parse(window.localStorage.getItem('user'))}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
