import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSun, faMoon, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Carousel } from "../carousel/Carousel";
import { Pricing } from "../pricing/pricing"
import Work_head from "../work/work_head/work_head"
import Work_content from "../work/work_content/work_content"
import About from "../about/about"
import Service from "../about/services/services"
import Projects from "../projects/projects"
import Residential from "../work/residential/residential"
import Login from "../Login/Login"
import Contact from "../contact/Contact"
import { Footer } from "../footer/Footer"
import { Showcase } from "../Showcase/ShowCase";
import { ThemeContext } from '../../../public/js/ThemeContext'

// import {useLocation, useNavigate } from 'react-router-dom'


export const NavBar = ({ isSun, toggleTheme }) => {

    // const location = useLocation();

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const bodyBackgroundColor = isSun ? 'white' : 'black';
    document.body.style.backgroundColor = bodyBackgroundColor;
    
    const w_nav_link_color = isSun ? styles.w_nav_link : styles.w_nav_link_isSun;
    const sub_menu_color = isSun ? styles.sub_menu : styles.sub_menu_isSun;    
    const sub_menu_link_color = isSun ? styles.sub_menu_link : styles.sub_menu_link_isSun;
    
    return (
    <Navbar expand="md" className={styles.box}>
        <Container className={styles.navbar}>
            <div className={styles.navigation_wrap}>
                <Navbar.Brand href="\" className={`${styles.logo_link} ${styles.w_nav_brand}`}>
                    <img className={styles.logo_main} alt="Logo" src={getImageUrl("nav/logo.png")} />
                    
                </Navbar.Brand>

                <div className={styles.menu}>
                    <Navbar.Collapse id="basic-navbar-nav" role="navigation" className={`${styles.navigation_items} ${styles.w_nav_menu}`}>
                        <Nav className="me-auto">

                            <Link to="/" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} onClick={() => onUpdateActiveLink('home')}>
                                <i></i><i></i>
                                <span>Home</span>
                            </Link>

                            <Link to="/work" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} onClick={() => onUpdateActiveLink('services')}>
                                <i></i><i></i>
                                <span>Work</span>
                            </Link>

                            <Link to="/projects" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} onClick={() => onUpdateActiveLink('projects')}>
                                <i></i><i></i>
                                <span>Projects</span>
                            </Link>

                            <Link to="/about-us" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} onClick={() => onUpdateActiveLink('about')}>
                                <i></i><i></i>
                                <span>About Us</span>
                            </Link>
                            <div className={`mx-3 ${styles.navigation_item} ${w_nav_link_color} ${styles.sun}`}>
                                {/* <FontAwesomeIcon icon={faMoon} /> */}
                                {isSun ? (<FontAwesomeIcon icon={faSun} style={{height: `20px`}} onClick={toggleTheme} />)
                                :
                                (<FontAwesomeIcon icon={faMoon}  style={{height: `20px`}} onClick={toggleTheme}/>)
                                }

                            </div>
                        </Nav>
                    </Navbar.Collapse>


                </div>

                <Navbar.Toggle className={`${styles.menu_button} ${styles.w_nav_button} ${isOpen ? styles.open_menu : ''}`} onClick={toggleMenu}>
                    <img src={getImageUrl("menu.png")} className={styles.menu_icon} alt="" />
                        
                </Navbar.Toggle>
                <div className={`${styles.sub_menu_wrap} ${isOpen ? styles.open_menu : ''}`} id={styles.subMenu}>
                            <div className={sub_menu_color}>
                                <div className={styles.user_info}>
                                    <img src={getImageUrl("Praveen Singh.jpg")} alt="User" />
                                    <h2></h2>
                                </div>
                                <hr />
                                <Link to="/" className={sub_menu_link_color}>
                                    <i className="fa-solid fa-house"></i>
                                    <p className={styles.list}>Home</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link to="/work" className={sub_menu_link_color}>
                                    <i className="fa-solid fa-briefcase"></i>
                                    <p className={styles.list}>Work</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link to="/projects" className={sub_menu_link_color}>
                                    <i className="fa-solid fa-building"></i>
                                    <p className={styles.list}>Projects</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link to="/about-us" className={sub_menu_link_color}>
                                    <i className="fa-solid fa-address-card" ></i>
                                    <p className={styles.list}>About Us</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                <hr />
                                <div className={sub_menu_link_color}>
                                    {/* <FontAwesomeIcon icon={faMoon} /> */}
                                    {isSun ? (<FontAwesomeIcon icon={faSun} onClick={toggleTheme} />)
                                    :
                                    (<FontAwesomeIcon icon={faMoon} onClick={toggleTheme}/>)
                                    }
                                    {/* <div>{isSun ? <FontAwesomeIcon icon={faSun} onClick={toggleTheme}/> : <FontAwesomeIcon icon={faMoon} onClick={toggleTheme}/>}</div> */}
                                    <p className={styles.list} id={styles.theme} onClick={toggleTheme}>Theme</p>
                                </div>
                                <hr />
                                <Link to="/login" className={sub_menu_link_color}>
                                    <i className="fa-solid fa-user" ></i>
                                    <p className={styles.list}>Login</p>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                                
                            </div>

                        </div>
                <Nav.Link href="\contact-us" className={`${styles.button} ${styles.cc_contact_us} ${styles.w_inline_block}`} onClick={() => onUpdateActiveLink('about')}>
                        <i></i><i></i>
                        <span>Contact us</span>
                </Nav.Link>
            </div>
        </Container>
    </Navbar>
    
    )
}
