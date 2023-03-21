import Image from 'next/dist/client/image'


export function Search(){
    return(
        <div className="search">
            <div className="search_content">
                <input type="text" placeholder='Напишите что нибудь'/>
                <div className="images">
                    <Image src='/search/img/photo.svg' width={22} height={20} alt="" />
                </div>
                <div className="images">
                    <Image src='/search/img/send.svg' width={17} height={16} alt="" />
                </div>
                
            </div>
        </div>
    )
}