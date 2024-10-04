import { useState } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';

function Navbar() {
    const [open,setOpen] = useState(false)
    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="../../../public/public/house.png" alt="" />
                    <span>RealState</span>
                </a>
                <a href="/">Home</a>
                <Link to="/list" >
                <a href="/">Properties</a>
                </Link>                
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agent</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span>David Grix</span>
                        <Link to="/profile" className='profile'>
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                <a href="/">Sign in</a>
                <a href="/" className='register'>Sign up</a>
                </>
                )}
                <div className='menuicon'>
                    <img src="../../../public/public/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>

                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agent</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;