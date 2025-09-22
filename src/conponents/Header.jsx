import { NavLink, useLocation, useNavigate } from 'react-router'
import '../styles/header.css'
function Header(){
    const current_location = useLocation()
    const isHome = current_location.pathname === '/'
    const isWork = current_location.pathname == '/works'
    const isThanks = current_location.pathname == '/thanks'
    const navigate = useNavigate()
    return(
        <header className="header">
            <div className='header-container'>
                <img id="header-yeppi_logo" src='/imgs/yeppi_logo.jpg' onClick={()=>navigate('/')}></img>
                <div className='header-button_container'>
                    <div id={isHome ? 'active':'disabled'} onClick={() => navigate('/')}>소개</div>
                    <div id={isWork ? 'active':'disabled'} onClick={() => navigate('/works')}>작품</div>
                    <div id={isThanks ? 'active':'disabled'} onClick={() => navigate('/thanks')}>고마운 사람들</div>
                </div>
                <div id='header-weight'></div>
            </div>
        </header>
    )
}

export default Header