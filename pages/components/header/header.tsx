import { useState } from 'react'
import { MobileNav } from './mobile-nav'

export function Header(){
    const [state, setState] = useState(false)

    return(
        <div className="header_wrap">
            <nav className="desktop_nav">
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="">Статьи</a></li>
                    <li><a href="">Обо мне</a></li>
                    <li><a href="">Реклама</a></li>
                    <li><a href="">Профиль</a></li>
                </ul>
            </nav>
            <div className="mobile">
                <div className="prew" onClick={() => setState(prev => !prev)}>
                    <span></span><span></span><span></span>
                </div>
                <div className={state ? "nav_container active": "nav_container"}>
                    <MobileNav/>
                </div>
            </div>
            <input type="text" placeholder='Поиск по блогу'/>
        </div>
    )
}