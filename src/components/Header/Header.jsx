import React from 'react'
import { menu } from './menu'
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header} >
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                {menu.map((item, idx) => (
                    <li key={`menu item ${idx}`}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
                </ul>
                <div className={styles.buttons}>
                    <button className={styles['login-button']}>LOGIN</button>
                    <button className={styles['sign-up-button']}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Header
