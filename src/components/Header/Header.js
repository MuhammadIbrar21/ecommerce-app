import { Link } from "react-router-dom"
import './Header.css';
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

const Header = () => {

    const { cartItems } = useContext(CartContext);

    useEffect(() => {

        let searchBtn = document.getElementById('search-icon');
        let closeBtn = document.getElementById('close-bar');
        let searchBar = document.querySelector('.search-bar');

        searchBtn.addEventListener('click', () => {
            searchBar.classList.add('show');
        })
        closeBtn.addEventListener('click', () => {
            searchBar.classList.remove('show');
        })
    }, [])

    return (
        <nav>
            <div class="nav-wrapper">
                <div className="nav-top">
                    <div className="search-bar">
                        <div className="search-body">
                            <input type="text" id="search" placeholder="Search" />
                            <div id="close-bar">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </div>
                        </div>

                    </div>
                    <div id="search-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
                    </div>
                    <span></span>
                    <span></span>
                    <Link to='/' class="brand-logo"><img src="rosh_gallery.avif" alt="logo" /></Link>
                    <span></span>
                    <span></span>
                    <Link to='/cart' id="add-to-cart">
                        {
                            cartItems.length === 0 ? <svg class="icon icon-cart-empty" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#4d4d4d">
                                <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                                :
                                <>
                                    <svg class="icon icon-cart-empty" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#4d4d4d">
                                        <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                    <span>{cartItems.length}</span>
                                </>

                        }
                    </Link>
                </div>
                <div className="nav-bottom">
                    <div className="nav-bar">
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <Link to="/women" >Women <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                                </span></Link>
                            </li>
                            <li>
                                <Link to="/tracksuit" >Tracksuits</Link>
                            </li>
                            <li>
                                <Link to="/stocking">Stocking</Link>
                            </li>
                            <li>
                                <Link to="/croptshirts">Crop TShirts</Link>
                            </li>
                            <li>
                                <Link to="/turtleneck">Turtle Neck</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
