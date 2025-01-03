import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
const Navbar = () => {
    return (
        <div className="navbar bg-[rgb(35,56,49)] text-white fixed 
                w-full top-0 left-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-gray-700 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow text-base">
                        <li><NavLink>About</NavLink></li>
                <li><NavLink>Experience</NavLink></li>
                <li><NavLink>Skill</NavLink></li>
                <li><NavLink>Education</NavLink></li>
                <li><NavLink>Projects</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl"><img className="h-20 w-20" src={logo} alt="" /></a> */}
                <div>
                    <img className="h-20 w-20 rounded-full" src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 text-lg">
                <li className='px-2'><NavLink>About</NavLink></li>
                <li className='px-2'><NavLink>Experience</NavLink></li>
                <li className='px-2'><NavLink>Education</NavLink></li>
                <li className='px-2'><NavLink>Skill</NavLink></li>
                <li className='px-2'><NavLink>Projects</NavLink></li>
                <li className='px-2'><NavLink>Contact</NavLink></li>
                
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-base landscape:text-xl">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;