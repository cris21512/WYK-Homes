import logo from '../../assets/icons/Homes.png';
import React, { useState, useEffect } from "react";
import ShinyText from '../../Efects/TextAnimations/ShinyText/ShinyText';
import './Navbar.css';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className={`nav ${isScrolled ? "affix" : ""}`}>
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="Logo" className="img-logo" />
                </a>
            </div>
            <div
                className={`main_list ${menuActive ? "show_list" : ""}`}
                id="mainListDiv"
            >
                <ul>
                    <li>
                        <a href="#">
                            <ShinyText text="Home" disabled={false} speed={3} className="custom-class" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ShinyText text="About" disabled={false} speed={3} className="custom-class" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ShinyText text="Works" disabled={false} speed={3} className="custom-class" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ShinyText text="Contact" disabled={false} speed={3} className="custom-class" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;