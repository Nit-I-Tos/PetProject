import React, { useState } from 'react'
import s from './Header.module.css'
import shopify from '../../image/shopify.png'
import searchimg from '../../image/search.png'
import coins from '../../image/coins.png'
import heart from '../../image/heart.png'
import profile from '../../image/user.png'
import burger from '../../image/menu-burger.png'
import Order from './Order'

const showOrders = (props) => {
    return(<div>{props.orders.map(el => (
        <Order key={el.id} item={el} />
    ))}
    </div>)
}

const showNothing = () => {
    return(<div className={s.empty}>
        <h2>В корзине нет товаров</h2>
    </div>)
}

export default function Header (props){
    let[cardOpen, setCardOpen] = useState(false);

    return(
        <header className={s.header}>
            <img className={s.logo} src={shopify}></img>
            <div className={s.search}>
                <input placeholder='Найти товар' type='search'/>
                <button><img className={s.searchImg} src={searchimg}></img></button>
            </div>
            <div className={s.heart}>
                <img src={heart}></img>
                <label><strong>Избранное</strong></label>
            </div>
            <div  className={s.profile}>
                <img src={profile}></img>
                <label><strong>Войти</strong></label>
            </div>
            <div onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`${s.coins} ${cardOpen && `${s.active}`}`}>
                <img src={coins}></img>
                <label><strong>Корзина</strong></label>
            </div>
            {cardOpen && (
                <div className={s.shopCard}>
                    {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
                </div>
            )}
            <img className={s.burger} src={burger}></img>
            
        </header>
    )
}