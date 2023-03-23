import Image from 'next/dist/client/image'
import { useDispatch } from 'react-redux'
import { increment } from '../../../slice'
import {useSwipeable} from 'react-swipeable'
import { useState } from 'react'
import { transform } from 'typescript'

export default function Stories(){
    const dispatch = useDispatch()
    const [activeStries, setActiveStories] = useState(0)

    const updateIndex = (counter:number) => {
        if (activeStries > 0){
            setActiveStories(-1)
        }else{
           setActiveStories(counter)
        }
    }
    const remuveIndex = (counter:number) => {
        if (activeStries < 0){
            setActiveStories(1)
        }else{
           setActiveStories(counter)
        }
    }

    const hendlers = useSwipeable({
        onSwipedLeft: () => remuveIndex(activeStries - 1),
        onSwipedRight: () => updateIndex(activeStries + 1)
    })
    return(
        <div {...hendlers} className="stories" >
            <div className="stories_content" style={{transform: `translateX(${activeStries * 50}%)`}}>
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Отдыхаю на природе</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle4.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>21.01.2023</p>
                </div>
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Заканчиваю сложный проект</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle1.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>9.12.2022</p>
                </div>
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Переехал в новую квартиру</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle2.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>19.10.2022</p>
                </div>
                <div className="stories_post" onClick={() => {dispatch(increment())}}>
                    <p>Осень пришла!</p>
                    <div className="image">
                        <Image src='/stories/img/Rectangle3.jpg' width={140} height={195} alt="" />
                    </div>
                    <p>21.09.2022</p>
                </div>
            </div>
        </div>
    )
}