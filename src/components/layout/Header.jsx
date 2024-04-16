import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggle } from "../../store/mobileNavToggleSlice";
import { useEffect, useRef } from "react";

const menuItems = [
    {
        link: '/#hero',
        text: 'Home'
    },
    {
        link: '/#about',
        text: 'About'
    },
    {
        link: '/#services',
        text: 'Services'
    },
    {
        link: '/#portfolio',
        text: 'Portfolio'
    },
    {
        link: '/#team',
        text: 'Team'
    },
    {
        link: '/blog',
        text: 'Blog'
    },
    {
        link: '/#',
        text: 'Dropdown'
    },
    {
        link: '/#contact',
        text: 'Contact'
    }
]

const menuDropdownItems = [
    {
        link: '/#',
        text: 'Dropdown 1'
    },
    {
        link: '/#',
        text: 'Deep Dropdown'
    },
    {
        link: '/#',
        text: 'Dropdown 2'
    },
    {
        link: '/#',
        text: 'Dropdown 3'
    },
    {
        link: '/#',
        text: 'Dropdown 4'
    },
]

const menuDropdownItemsLevel2 = [
    {
        link: '/#',
        text: 'Deep Dropdown 1'
    },
    {
        link: '/#',
        text: 'Deep Dropdown 2'
    },
    {
        link: '/#',
        text: 'Deep Dropdown 3'
    },
    {
        link: '/#',
        text: 'Deep Dropdown 4'
    },
    {
        link: '/#',
        text: 'Deep Dropdown 5'
    },
]

export default function Header() {

    const { hash, pathname } = useLocation()
    useEffect(function () {
        if (hash) {
            setTimeout(() => {
                document.querySelector(hash).scrollIntoView({ behavior: 'smooth', block: 'start' })    
            }, 100);
        }
    }, [hash, pathname])

    const mobileNavToggle = useSelector(state => state.mobileNavToggle.visible)
    const dispatch = useDispatch()

    useEffect(() => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
    }, [mobileNavToggle])

    const pathnameWithHash = pathname + hash

    return (
        <header
            id="header"
            className={
                `header ${pathname === '/' ?
                    'fixed-top' :
                    pathname === '/blog' ?
                        'sticky-top' :
                        null
                } d-flex align-items-center`
            }
        >
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <Link to='/' className="logo d-flex align-items-center me-auto me-xl-0">
                    {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
                    <h1>Append</h1>
                    <span>.</span>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {menuItems.map(menuItem => {
                            return menuItem.text !== 'Dropdown' ?
                                <li key={menuItem.text}>
                                    <Link
                                        to={menuItem.link}
                                        className={pathnameWithHash === menuItem.link ? 'active ' : null}
                                    > {menuItem.text} </Link>
                                </li> :
                                <li
                                    key={menuItem.text}
                                    className={`${pathnameWithHash === menuItem.link ?
                                        'active ' :
                                        null
                                        } dropdown has-dropdown`}
                                >
                                    <Link to={menuItem.link} >
                                        <span>{menuItem.text}</span>
                                        <i className="bi bi-chevron-down"></i>
                                    </Link>
                                    <ul className="dd-box-shadow">
                                        {menuDropdownItems.map(menuDropdownItem => {
                                            return menuDropdownItem.text !== 'Deep Dropdown' ?
                                                <li key={menuDropdownItem.text} >
                                                    <Link to={menuDropdownItem.link} >
                                                        {menuDropdownItem.text}
                                                    </Link>
                                                </li> :
                                                <li
                                                    key={menuDropdownItem.text}
                                                    className="dropdown has-dropdown"
                                                >
                                                    <Link to={menuDropdownItem.link}>
                                                        <span>{menuDropdownItem.text}</span>
                                                        <i className="bi bi-chevron-down"></i>
                                                    </Link>
                                                    <ul className="dd-box-shadow">
                                                        {menuDropdownItemsLevel2.map(menuDropdownItemLevel2 => {
                                                            return <li key={menuDropdownItemLevel2.text} >
                                                                <Link to={menuDropdownItemLevel2.link} >
                                                                    {menuDropdownItemLevel2.text}
                                                                </Link>
                                                            </li>
                                                        })}
                                                    </ul>
                                                </li>
                                        })}
                                    </ul>
                                </li>
                        })}
                    </ul>

                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${!mobileNavToggle ? 'bi-list' : 'bi-x'}`}
                        onClick={() => dispatch(toggle())}
                    ></i>
                </nav>

                <a className="btn-getstarted" href="index.html#about">Get Started</a>

            </div>
        </header>
    )
}
