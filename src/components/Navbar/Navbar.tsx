import { useState, useEffect } from 'react';
import './Navbar.css'; // Adjust the CSS file path based on your project structure
 // Adjust the path as necessary
// import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom"; // React-Router for navigation

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [sidebarOpen,] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

 

    return (
        <nav className={`navbar ${visible ? '' : 'nav_hidden'}`}>
            <section className='flex justify-between items-center p-6 shadow-md bg-white'>
                {/* Desktop View */}
                <Link to='/'>
                    <div className="flex items-center gap-3">
                        <img src={''}
                         alt="" className='w-[50px] h-[50px]' />
                        <span className='logo'>ChatApp</span>
                    </div>
                </Link>
                <div>
                    <ul className="hidden md:flex gap-8">
                       <li className="nav-link"><Link to='/chat'>Chat</Link></li>
                        <li className="nav-link"><Link to='/'>Video-call</Link></li>
                        <li className="nav-link"><a href='/Videoconference' target="_blank" rel="noopener noreferrer">Conference</a></li>
                        <li className="nav-link"><Link to='/profile'>Profile</Link></li>
                        <li className="nav-link"><Link to='/settings'>Settings</Link></li>
                        <li className="nav-link"><Link to='/home'>Log-Out</Link></li>
                    </ul>
                </div>
               
            </section>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="mSidebar md:hidden flex flex-col items-center gap-4 p-6">
                    <ul>
                        <li className="nav-link"><Link to='/#waitlist'>Courses</Link></li>
                        <li className="nav-link"><Link to='/exam'>Exam</Link></li>
                        <li className="nav-link"><Link to='/#waitlist'>Forum</Link></li>
                        <li className="nav-link"><Link to='/blogs'>Blogs</Link></li>
                        <li className="nav-link"><Link to='/testseries'>Test Series</Link></li>
                        <li className="nav-link"><Link to='/#waitlist'>Contact Us</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
