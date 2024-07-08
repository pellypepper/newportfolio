import logo from './logo.svg';
import './App.css';
import NavMenu from './navmenu';
import Home from './home';
import { Outlet, Link } from "react-router-dom";
function Main() {
  return (
    <div className="App">
      <NavMenu />

    <div className='outlet-wrapper'>
    <Outlet />
    </div>
      
    </div>
  );
}

export default Main;
