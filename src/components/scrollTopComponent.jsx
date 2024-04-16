import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ScrollTopComponent() {
    const scrollTop = useSelector(state => state.scrollTop.active)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Link
            to='/#'
            id="scroll-top"
            className={`scroll-top d-flex align-items-center justify-content-center ${scrollTop ? 'active' : null}`}
            onClick={() => scrollToTop()}
        >
            <i className="bi bi-arrow-up-short"></i>
        </Link>
    )
}
