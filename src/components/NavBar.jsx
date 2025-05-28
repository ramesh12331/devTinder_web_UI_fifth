import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector((store)=>store.user);
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">🧑‍💻 DevTinder</a>
  </div>
  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {user&&(<div className="w-10 rounded-full">
          
            <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
           
           
            {/* <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} /> */}
          
        </div>)}
        {/* ************** */}
        
        {/* ************** */}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connections">Connections</Link></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
