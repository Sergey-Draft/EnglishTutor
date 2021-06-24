import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.headerInner}>
                    <div className={s.headerlogo}>
                        <p>уроки</p>
                        <p>английского</p>
                    </div>
                    <div className={s.phones}>
                        <img className={s.phoneLogo+' '+s.fa} src='https://i.ya-webdesign.com/images/telephone-png-icons-free-1.png' alt='logo'></img>
                        <div>
                            <div>+375 29 705 54 55</div>
                            <div>+375 33 555-55-55</div>
                        </div>

                    </div>
                    <nav className={s.nav}>
                        <NavLink to='/main' activeClassName={s.active} className={s.link}>Главная</NavLink>
                        <NavLink to='/introduce' activeClassName={s.active} className={s.link}>Обо мне</NavLink>
                        <NavLink to='/mymethod' activeClassName={s.active} className={s.link}>Мой метод</NavLink>
                        <NavLink to='/cost' activeClassName={s.active} className={s.link}>Стоимость</NavLink>
                        <NavLink to='/contacts' activeClassName={s.active} className={s.link}>Контакты</NavLink>
                    </nav>
                    <button className={s.burger} id="navToggle" type="button">
                        <span className={s.burgerItem}>Menu</span>
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header;