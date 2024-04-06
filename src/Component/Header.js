import React from 'react'
import { Link ,useLocation} from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div>
       <nav>
        <ul className="nav nav-tabs">          
          <li className="nav-item">
            <Link to="/admin" className={`nav-link ${pathname === '/admin' ? 'active-link' : ''}`}>
              Admin
            </Link>
          </li>          
          <li className="nav-item">
            <Link to="/agent" className={`nav-link ${pathname === '/agent' ? 'active-link' : ''}`}>
              Agent User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
