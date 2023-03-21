import Image from 'next/dist/client/image'


export function Sidebar(){
    return(
        <div className="content">
            <div className="image">
                <Image src='/sidebar/img/noutbook.png' width='300' height='180' alt="" />
            </div>
            <div className="avatar">
                <Image src='/sidebar/img/avatar.png' width='100' height='100' alt="" />
            </div>
            <div className="initial">
                <h4>Дмитрий Валак</h4>
                <p>блог Front-end разработчика</p>
            </div>
            <div className="contacts">
                <Image src='/sidebar/img/instagram.svg' width='25' height='25' alt="" />
                <Image src='/sidebar/img/vk.svg' width='25' height='25' alt="" />
                <Image src='/sidebar/img/pinterest.svg' width='25' height='25' alt="" />
            </div>
            <div className="description">
                <p>Front-end разработчик. Практик верстки сайтов.
                    Созданием сайтов занимаюсь с 2012 года. 
                    Работал в нескольких ИТ компаниях и наработал более 10 000 часов
                    в создании сайтов различной сложности.</p>
            </div>
            <div className="buttons">
                <button>Мои работы</button>
                <button>Написать мне</button>
            </div>
        </div>
    )
}