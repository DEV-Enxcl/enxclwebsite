import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from '@/assets/enxcl-logo.webp'
import Resources from "@/assets/resources.webp"
import blogT from "@/assets/blogT.webp"
import { useState, useEffect } from "react"

export function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // State for mobile Services sub-menu
    const [isNewsMenuOpen, setIsNewsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navigate = useNavigate();

    // Function to toggle mobile menu
    const handleToggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to toggle the mobile Services sub-menu
    const handleToggleServicesMenu = () => {
        setIsServicesMenuOpen(!isServicesMenuOpen);
    };

    const handleToggleNewsMenu = () => {
        setIsNewsMenuOpen(!isNewsMenuOpen);
    };

    // Scroll listener to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Change background to black after 50px scroll
            } else {
                setIsScrolled(false); // Revert back to initial state based on path
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dynamic class names for navbar
    const navbarBgClass = isScrolled ? 'bg-white' : 'bg-white';
    const textColorClass = isScrolled || isHomePage ? 'text-black' : 'text-black';

    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
        setIsMobileMenuOpen(false); // Close the mobile menu after navigation
    };

    return (
        <>
            {/* Main Navbar */}
            <div
                className={`${navbarBgClass} transition-colors duration-300 px-8 md:px-24 py-4 w-full h-16 items-center flex justify-between fixed z-20 shadow-lg`}
            >
                {/* Logo */}
                <div onClick={() => navigateTo('/')} className="cursor-pointer">
                    <img src={Logo} alt="logo" className="w-[133px] h-[60px]" />
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:block" >
                    <NavigationMenuList>
                        <NavItems textColorClass={textColorClass} closeMenu={() => setMenuOpen(false)} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={handleToggleMenu}
                        className={`${isHomePage || isScrolled ? 'text-black' : 'text-black'} focus:outline-none`}
                    >
                        {/* Toggle between hamburger and close icon */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-10 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-[#121212] text-white w-[250px] h-full`}
            >
                <ul className="flex flex-col items-start gap-4 p-4 pt-24">
                    <li>
                        <Link to="/about" className="text-white hover:text-[#ffbe47]" onClick={() => navigateTo('/')}>
                            ABOUT US
                        </Link>
                    </li>
                    <li>
                        {/* Services with Sub-menu in mobile */}
                        <button
                            className="text-white hover:text-[#ffbe47] focus:outline-none flex items-center"
                            onClick={handleToggleServicesMenu}
                        >
                            SERVICES
                            <svg
                                className="h-4 w-4 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isServicesMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'}
                                />
                            </svg>
                        </button>
                        {isServicesMenuOpen && (
                            <ul className="flex flex-col gap-2 pl-6 mt-2">
                                <li onClick={() => navigateTo('/xclerate')} className="text-white hover:text-[#ffbe47]">
                                    Xclerate
                                </li>
                                <li onClick={() => navigateTo('/itexs')} className="text-white hover:text-[#ffbe47]">
                                    ITExS
                                </li>
                                <li onClick={() => navigateTo('/bizexs')} className="text-white hover:text-[#ffbe47]">
                                    BizExS
                                </li>
                                <li onClick={() => navigateTo('/xperteaze')} className="text-white hover:text-[#ffbe47]">
                                    XpertEaze
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        {/* Services with Sub-menu in mobile */}
                        <button
                            className="text-white hover:text-[#ffbe47] focus:outline-none flex items-center"
                            onClick={handleToggleNewsMenu}
                        >
                            NEWS AND INSIGHTS
                            <svg
                                className="h-4 w-4 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isNewsMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'}
                                />
                            </svg>
                        </button>
                        {isNewsMenuOpen && (
                            <ul className="flex flex-col gap-2 pl-6 mt-2">
                                <li onClick={() => navigateTo('/blogs')} className="text-white hover:text-[#ffbe47]">
                                    Blogs
                                </li>
                                <li onClick={() => navigateTo('/events')} className="text-white hover:text-[#ffbe47]">
                                    Events
                                </li>

                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/contact-us" className="text-white hover:text-[#ffbe47]" onClick={() => navigateTo('/contact-us')}>
                            CONTACT
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    );
}

// eslint-disable-next-line react/prop-types
const NavItems = ({ textColorClass, closeMenu, menuOpen, setMenuOpen }) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <>
            <NavigationMenuItem>
                <span className={`bg-transparent ${textColorClass} hover:text-[#ffbe47] group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-transparent text-black cursor-pointer`} onClick={() => navigateTo('/about')}>ABOUT US</span>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#ffbe47]`} onMouseOver={() => setMenuOpen(true)}>SERVICES</NavigationMenuTrigger>
                {menuOpen && (
                    <NavigationMenuContent className="md:max-w-[1000px] md:min-w-[1000px] text-white">
                        <div className="w-full p-12 flex gap-10">
                            <div className="flex flex-col gap-10 w-2/5">
                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/xclerate');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">Xclerate</span><br />
                                    <span className="text-sm">Business and Management Consulting</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>
                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/itexs');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">ITExS</span><br />
                                    <span className="text-sm">Technology Consulting and Services</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>
                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/bizexs');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">BizExS</span><br />
                                    <span className="text-sm">Business Enablement Services</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>

                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/xperteaze');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">XpertEaze</span><br />
                                    <span className="text-sm">Corporate and Professional Upskilling</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-3/5">
                                <img src={Resources} alt="Menu" className="h-[200px]" />
                                <div className="flex flex-col gap-3">
                                    <span className="text-[28px] font-semibold">
                                        Services
                                    </span>
                                    <span className="text-sm">
                                        Watch how we stage our organization to reframe the future of your enterprise. Our company specializes in four key service verticals for driving exceptional excellence and sustainable success for our customers.</span>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                )}
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#ffbe47]`} onMouseOver={() => setMenuOpen(true)}>NEWS AND INSIGHTS</NavigationMenuTrigger>
                {menuOpen && (
                    <NavigationMenuContent className="md:max-w-[1000px] md:min-w-[1000px] text-white">
                        <div className="w-full p-12 flex gap-10">
                            <div className="flex flex-col gap-10 w-2/5">
                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/blogs');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">Blogs</span>
                                    <span className="text-sm">Inspiring Perspectives</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>
                                <div className="text-white hover:text-[#ffbe47] cursor-pointer group" onClick={() => {
                                    navigateTo('/events');
                                    closeMenu();
                                }}>
                                    <span className="text-[18px] font-semibold">Events</span>
                                    <span className="text-sm">Enlightening and Transformative</span>
                                    <div className="h-[2px] w-full bg-gray-500 group-hover:bg-[#ffbe47]"></div>
                                </div>

                            </div>
                            <div className="flex flex-col gap-5 w-3/5">
                                <img src={blogT} alt="Menu" className="h-[200px]" />
                                <div className="flex flex-col gap-3">
                                    <span className="text-[28px] font-semibold">
                                        News and Insights
                                    </span>
                                    <span className="text-sm">
                                        Discover a dynamic mix of insightful blogs, engaging videos, and exciting events designed to keep you informed, inspired, and connected.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                )}
            </NavigationMenuItem>
            <NavigationMenuItem>
                <span className={`bg-transparent ${textColorClass} hover:text-[#ffbe47] group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-transparent text-black cursor-pointer`} onClick={() => navigateTo('/contact-us')}>CONTACT</span>
            </NavigationMenuItem>

        </>
    )
}

export default NavBar;