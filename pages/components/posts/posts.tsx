import Image from 'next/dist/client/image'


export function Posts(){
    return(
        <div className="post">
            <div className="post_content">
                <div className="picture">
                    <Image src='/posts/img/Phone.png' width={600} height={245} alt="" />
                </div>
                <div className="description">
                    <h2>Как писать код быстро и безболезненно?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.</p>
                </div>
                <div className="description_bottom">
                    <p>21.06.2020</p>
                    <p>создание сайтов</p>
                    <a href="/post_one">читать</a>
                </div>
            </div>
        </div>
    )
}