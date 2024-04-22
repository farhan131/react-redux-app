import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggle } from "../../store/mobileNavToggleSlice";
import { useEffect } from "react";

const menuItems = [
    {
        id: 0,
        type: 'link',
        link: '/#hero',
        text: 'Home'
    },
    {
        id: 1,
        type: 'link',
        link: '/#about',
        text: 'About'
    },
    {
        id: 2,
        type: 'link',
        link: '/#services',
        text: 'Services'
    },
    {
        id: 3,
        type: 'link',
        link: '/#portfolio',
        text: 'Portfolio'
    },
    {
        id: 4,
        type: 'link',
        link: '/#team',
        text: 'Team'
    },
    {
        id: 5,
        type: 'link',
        link: '/blog',
        text: 'Blog'
    },
    {
        id: 6,
        type: 'dropdown',
        link: '/#',
        text: 'Dropdown',
        dropdownItems: [
            {
                id: 0,
                type: 'link',
                link: '/#',
                text: 'Dropdown 1',
            },
            {
                id: 1,
                type: 'dropdown',
                link: '/#',
                text: 'Deep Dropdown',
                deepDropdownItems: [
                    {
                        id: 0,
                        type: 'link',
                        link: '/#',
                        text: 'Deep Dropdown 1',
                    },
                    {
                        id: 1,
                        type: 'link',
                        link: '/#',
                        text: 'Deep Dropdown 2',
                    },
                    {
                        id: 2,
                        type: 'link',
                        link: '/#',
                        text: 'Deep Dropdown 3',
                    },
                    {
                        id: 3,
                        type: 'link',
                        link: '/#',
                        text: 'Deep Dropdown 4',
                    },
                    {
                        id: 4,
                        type: 'link',
                        link: '/#',
                        text: 'Deep Dropdown 5',
                    },
                ],
            },
            {
                id: 2,
                type: 'link',
                link: '/#',
                text: 'Dropdown 2',
            },
            {
                id: 3,
                type: 'link',
                link: '/#',
                text: 'Dropdown 3',
            },
            {
                id: 4,
                type: 'link',
                link: '/#',
                text: 'Dropdown 4',
            },
        ]
    },
    {
        id: 7,
        type: 'link',
        link: '/#contact',
        text: 'Contact'
    }
]

export default function Header() {

    const { hash, pathname } = useLocation()
    useEffect(function () {
        if (hash) {
            setTimeout(() => {
                document.querySelector(hash).scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100);
        }
    }, [hash])

    const mobileNavToggle = useSelector(state => state.mobileNavToggle.visible)
    const dispatch = useDispatch()

    useEffect(() => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
    }, [mobileNavToggle])

    const pathnameWithHash = pathname + hash

    return (
        <header
            id="header"
            className={`header 
                ${pathname === '/' ? 'fixed-top' : pathname === '/blog' ? 'sticky-top' : null} 
                d-flex align-items-center`}
        >
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <Link to='/' className="logo d-flex align-items-center me-auto me-xl-0">
                    {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
                    <h1>Append</h1>
                    <span>.</span>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {
                            menuItems.map(menuItem => {
                                return menuItem.type === 'link' ?
                                    <li key={menuItem.id}>
                                        <Link
                                            to={menuItem.link}
                                            className={pathnameWithHash === menuItem.link ? 'active ' : null}
                                        > {menuItem.text} </Link>
                                    </li> :
                                    <li
                                        key={menuItem.id}
                                        className={`${pathnameWithHash === menuItem.link ? 'active ' : null} dropdown has-dropdown`}
                                    >
                                        <Link to={menuItem.link} >
                                            <span>{menuItem.text}</span>
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <ul className="dd-box-shadow">
                                            {
                                                menuItem.dropdownItems.map(dropdownItem => {
                                                    return dropdownItem.type === 'link' ?
                                                        <li key={dropdownItem.id} >
                                                            <Link to={dropdownItem.link} >
                                                                {dropdownItem.text}
                                                            </Link>
                                                        </li> :
                                                        <li
                                                            key={dropdownItem.id}
                                                            className="dropdown has-dropdown"
                                                        >
                                                            <Link to={dropdownItem.link}>
                                                                <span>{dropdownItem.text}</span>
                                                                <i className="bi bi-chevron-down"></i>
                                                            </Link>
                                                            <ul className="dd-box-shadow">
                                                                {
                                                                    dropdownItem.deepDropdownItems.map(deepDropdownItem => {
                                                                        return <li key={deepDropdownItem.id} >
                                                                            <Link to={deepDropdownItem.link} >
                                                                                {deepDropdownItem.text}
                                                                            </Link>
                                                                        </li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                })
                                            }
                                        </ul>
                                    </li>
                            })
                        }
                    </ul>

                    <i
                        className={`mobile-nav-toggle d-xl-none bi ${!mobileNavToggle ? 'bi-list' : 'bi-x'}`}
                        onClick={() => dispatch(toggle())}
                    ></i>
                </nav>

                <Link to={menuItems[1].link} className="btn-getstarted">Get Started</Link>

            </div>
        </header>
    )
}
