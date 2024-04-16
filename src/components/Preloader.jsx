import { useEffect } from "react"

export default function Preloader() {
    useEffect(() => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            });
        }
    })
    return (
        <div id="preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
