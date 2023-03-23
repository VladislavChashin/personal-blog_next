import Image from 'next/dist/client/image'
import Link from 'next/link'
export default function MobileNav(){
    return(
        <div className="content">
            <div className="image">
                <Image src='/sidebar/img/noutbook.png' width='300' height='180' alt="macbook" />
            </div>
            <div className="info">
                <div className="avatar">
                    <Image src='/header/avatar.png' width='65' height='65' alt="" />
                </div>   
                <div className="initial">
                    <h4>Дмитрий Валак</h4>
                    <p>блог Front-end разработчика</p>
                </div>
            </div>
           
            <nav className="mobile_nav">
                <ul>
                    <li><Link href={'/'}>Статьи</Link></li>
                    <li><Link href={''}>Обо мне</Link></li>
                    <li><Link href={''}>Реклама</Link></li>
                    <li><Link href={''}>Профиль</Link></li>
                </ul>
                <div className="buttons">
                    <button onClick={() => location.href='/my_work'}>Мои работы</button>
                    <button>Написать мне</button>
                </div>
            </nav>
        </div>
    )
}