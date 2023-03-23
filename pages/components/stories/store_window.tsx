import { useSelector, useDispatch} from 'react-redux'
import { decrement } from '../../../slice'
import type {RootState} from '../../../store'

export default function Store_Window(){
    const count = useSelector((state: RootState) => state.value)
    const dispatch = useDispatch()

    return(
        <>
            <div className={count ? "store_window active": "store_window inactive"} onClick={() => {dispatch(decrement())}}>
                <div className="store_wrap">
                    <video controls autoPlay muted onEnded={() => {dispatch(decrement())}}>
                        <source src="/stories/SuperTrees.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                    </video>
                </div>
            </div>
        </>
    )
}