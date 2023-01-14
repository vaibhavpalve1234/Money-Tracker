import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import BaseHome from './Home';
import Login from './header/Login';
import Sign from './header/Sign'
const Header = () => {
    return (
        <div className='App'>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        Money Tracker
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Login'}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/sign-up'}>
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <Routes>
                            <Route exact path="/" element={<BaseHome />} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/sign-up" element={<Sign />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;