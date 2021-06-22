import React,{useContext} from 'react';
import './App.css';
import {shopContext} from './App'

function Nav(){

    const cart = useContext(shopContext)
    return(
    <section className="nav-bar">
        <div className="logo">
            <span className="logo logo-part--1">ale</span>
            <span className="logo logo-part--2">ppo</span>
        </div>
        <div className="search-bar">
            <input type='text'/>
            <button className='srch-btn'><ion-icon  name="search-outline"></ion-icon></button>
        </div>
        <div className="cart-icon">
            <button className="shoppin-btn"><ion-icon name="cart-outline"></ion-icon></button>
            <div className='cartvalue'>{cart.cartCount}</div>
        </div>
    </section>
    );
}

export default Nav;