import Image from 'next/dist/client/image'
import { useDispatch } from 'react-redux'
import { increment } from './slice'

export function Stories(){
    const dispatch = useDispatch()

    return(
        <div className="stories">
            <div className="stories_content">
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Отдыхаю на природе</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle1.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>21.09.2023</p>
                </div>
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Отдыхаю на природе</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle1.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>21.09.2023</p>
                </div>
            </div>
        </div>
    )
}