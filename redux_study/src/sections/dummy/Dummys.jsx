import {useDispatch, useSelector} from "react-redux";
import {counterMinus, counterPlus, trueFalseAction} from "../../feature/list/listSlice.jsx";

const Dummys = () => {
    const dispatch = useDispatch();
    const dummyData = useSelector((state) => state.dummy);


    return(
        <div>
            {
                dummyData.map((arr,inx) =>(
                 <div
                     key={arr.id}
                     style={arr.completed === true ? {textDecoration: null} : {textDecoration: "line-through", color: "red"}}
                     className="line-box"
                 >
                     <p onClick={()=>dispatch(trueFalseAction(inx))}>{arr.content} / {arr.count} / {arr.completed === true ? '진행중..' : '완료!'}</p>
                     <button onClick={() => dispatch(counterPlus(inx))}>+</button>
                     <button onClick={() => dispatch(counterMinus(inx))}>-</button>
                 </div>
                ))
            }

        </div>
    )
}
export default Dummys;
