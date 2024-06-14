import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice.jsx";


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    // const arrayCount = useSelector((state) => state.arrayCounter);
    const reArrays = useSelector((state) => state)
    const dispatch = useDispatch()


    console.log(reArrays);
    return(
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>

                <span>{count}</span>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <hr/>


            {/*{*/}
            {/*    arrayCount.map((arr,inx) => (*/}
            {/*        <div>*/}
            {/*            {arr.id} 번*/}
            {/*            <br/>*/}
            {/*            {arr.counterValue} 카운터*/}

            {/*            <button onClick={() => dispatch(addCounter(inx))}>++</button>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}


        </div>
    )
}
export default Counter;
