import Image from 'next/dist/client/image'
import Link from 'next/link'


export function Posts(props:any){
    return(
        <div className="post">
            <div className="post_content">
                <div className="picture">
                    <Image src={props.href} width={600} height={245} alt="" />
                </div>
                <div className="description">
                    <h2>{props.text}</h2>
                    <p>{props.txt}</p>
                </div>
                <div className="description_bottom">
                    <p>{props.date}</p>
                    <p>создание сайтов</p>
                    <Link href={'/post_one'}>читать</Link>
                </div>
            </div>
        </div>
    )
}