import Link from 'next/link'
import { useState } from 'react'
import { MobileNav } from './mobile-nav'

export function Header(){
    const [state, setState] = useState(false)

    return(
        <div className="header_wrap">
            <nav className="desktop_nav">
                <ul>
                    <li><Link href={'/'}>Главная</Link></li>
                    <li><Link href={''}>Статьи</Link></li>
                    <li><Link href={''}>Обо мне</Link></li>
                    <li><Link href={''}>Реклама</Link></li>
                    <li><Link href={''}>Профиль</Link></li>
                    
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