
import './App.css';
import NavMenu from './navmenu';

import { Outlet} from "react-router-dom";
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
