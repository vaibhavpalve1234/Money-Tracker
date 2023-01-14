import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './components/header/Login';
import Sign from './components/header/Sign'
import AuthTokenVerify from './button/auth'
import List from './components/expenses/List'
import BaseHome from './components/Home';
import SplitItemList from './components/expenses/SplitItemList'

function App() {
  let auth = AuthTokenVerify()
  console.log(auth.isAuthenticated, auth.status);
  return (
    <Router>
      <div className="App">
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
            <div >
              <Routes>
                <Route path="/List" element={(auth.isAuthenticated)?(auth.isAuthenticated && <List />):<Login />} />
              </Routes>
            </div>
            <div >
              <Routes>
                <Route path="/Split-List" element={(auth.isAuthenticated)?(auth.isAuthenticated && <SplitItemList />):<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
