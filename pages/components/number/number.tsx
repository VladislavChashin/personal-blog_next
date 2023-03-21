import { useState } from 'react'

export function Numberse(){
    const [count, setCount] = useState(1)

    return(
        <div className="number">
            <div className="number_content">
                <div onClick={() => {if (count <= 1){setCount(3)} else{setCount(count - 1)} }} className="wrap">{'<'}</div>
                <div onClick={() => setCount(1)} className={count === 1? 'wrap active': 'wrap'}>1</div>
                <div onClick={() => setCount(2)} className={count === 2? 'wrap active': 'wrap'}>2</div>
                <div onClick={() => setCount(3)} className={count === 3? 'wrap active': 'wrap'}>3</div>
                <div onClick={() => {if (count >= 3){setCount(1)} else{setCount(count + 1)} }} className="wrap">{'>'}</div>
            </div>
        </div>
    )
}