import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeMerge} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300 text-slate-700 sticky top-0 z-40 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content md:content-none mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                        <li><Link to={'/home'}>Homepage</Link></li>
                        <li><Link to={'/stat'}>Stats</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl gap-1">Dev 
                    <FontAwesomeIcon icon={faCodeMerge}></FontAwesomeIcon>
                Iqz</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='user'/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                        <li><a href='/'>User</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;