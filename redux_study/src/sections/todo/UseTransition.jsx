import {useDeferredValue, useState, useTransition} from "react";

let a = new Array(10000).fill(0);

const UseTransition = () => {
    let [name,setName] = useState('');

    /**
     * useTransition은 UI를 차단하지 않고 상태를 업데이트 할 수 있는 리액트 훅
     *  - 동기함수에서만 사용이 가능하다.
     * */
    let [isPending,setIsPending] = useTransition();


    /**
     * useDeferredValue
     * - useTransition 랑 같은 용도인데 변수사용시에 사용하면 된다.
     * */
    let state1 = useDeferredValue(name)


    return(
        <div>
            <input onChange={(e) => {
                setIsPending(()=> {
                    setName(e.target.value);
                })
            }} className="my-input"/>

            {
                isPending ? "loading.." :
                a.map(()=> {
                    return<div>{name}</div>
                })
            }

        </div>
    )
}
export default UseTransition;
