import Image from 'next/dist/client/image'
export function MobileNav(){
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
                    <li><a href="">Статьи</a></li>
                    <li><a href="">Обо мне</a></li>
                    <li><a href="">Реклама</a></li>
                    <li><a href="">Профиль</a></li>
                </ul>
                <div className="buttons">
                    <button>Мои работы</button>
                    <button>Написать мне</button>
                </div>
            </nav>
        </div>
    )
}