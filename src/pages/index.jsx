import './index.css';
import { Link, NavLink } from 'react-router-dom';

export function Index() {
  return (
    <div className="nav">

        {/* Navbar */}

        <span onselectstart="return false" id="name">
          <Link to='/' className="name">szean choi</Link>
        </span>
        <br /><br />
        <span id="pics">
          <NavLink to='/bnw' className="links">b&w</NavLink>
          <NavLink to='/color' className="links">color</NavLink>
        </span>
        <br /><br />
        <span id="extras">
          <NavLink to='/contact' className="linkss">contact</NavLink>
          <a href="https://mega.nz/folder/rt0k0ZzC#10vGO_SSVE_y0JWA4Ygxwg" target="_blank" className="linkss">archive</a>
        </span>
      </div>
  );

}