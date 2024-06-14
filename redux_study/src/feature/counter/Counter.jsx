import {useDispatch, useSelector} from "react-redux";
import {minus, plus} from "./counterSlice.jsx";
import {addCounter, minusCounter} from "./arrayCounterSlice.jsx";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)  => state.counter.value);
    const arrayCount = useSelector((state) => state.arrayCounterSlice);

    return(
        <div>
            <div>
                <button onClick={() => dispatch(plus())}>
                    +
                </button>

                <span>{count}</span>

                <button onClick={() => dispatch(minus())}> - </button>
            </div>

            <hr/>

            {
                arrayCount.map((arr,inx) => (
                    <div key={arr.id}>

                        {arr.id} 번
                        <br/>
                        <button onClick={() => dispatch(addCounter(inx))}>더하기</button>
                        {arr.counterValue} 카운터
                        <button onClick={() => dispatch(minusCounter(inx))}>빼기</button>


                    </div>
                ))
            }

        </div>
    )
}
export default Counter;
