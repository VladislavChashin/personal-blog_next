import Image from 'next/dist/client/image'

export function PostRead(){
    return(
        <>
        <div className="postRead">
            <div className="postRead_wrap">
                <div className="topSide">
                    <a href="/">вернуться назад</a><a href="">Поделиться<Image src='/posts/img/share.svg' width={19} height={20} alt="" /></a>
                </div>
                <div className="read">
                    <div className="read_article">
                        <h1>Как создавать сайты легко</h1>
                        <p>21.06.2020</p>
                    </div>
                    <div className="text_wrap">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. <br /> <br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                    </div>
                    <div className="image">
                        <Image src='/posts/img/image-post.jpg' width={550} height={230} alt="" />
                    </div>
                    <div className="text_wrap">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                    </div>
                </div>
                <div className="intersting_read">
                    <p>Интересно почитать</p>
                    <div className="content">
                    <div className="intrerest">
                        <h3>Как я сходил на FrontEnd Conf 2021</h3>
                        <p>21.06.2020</p>
                    </div>
                    <div className="intrerest">
                        <h3>Как писать код быстро и  ...</h3>
                        <p>21.06.2020</p>
                    </div>
                    <div className="intrerest">
                        <h3>Купил новый ноутбук за 150 000 руб</h3>
                        <p>21.06.2020</p>
                    </div>
                    <div className="intrerest">
                        <h3>Купил новый ноутбук за 150 000 руб</h3>
                        <p>21.06.2020</p>
                    </div>
                    </div> 
                </div>
                {/* <div className="discussion">
                    <div className="text_comment">
                        <form action="">
                            <input type="text" />
                            <button>Отправить</button>
                        </form>
                    </div>
                    <div className="all_comment">

                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}