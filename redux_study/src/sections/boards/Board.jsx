import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBoard} from "../../feature/board/boardSlice.jsx";

const Board = () => {
    const dispatch = useDispatch();
    const board = useSelector((state) => state.board);
    useEffect(()=>{
        dispatch(fetchBoard());
    },[dispatch]);


    if(board.isLoading)return <>Loading..</>
    if(board.isSuccess)return <>
        {
            board.data.map((data) => (
                <div key={data.id} style={{textDecoration: "underline", backgroundColor: "pink", marginTop: 10, width: 300}}>
                    {data.title} -
                    {data.content} -
                    {data.writer}
                </div>
            ))
        }
    </>

}
export default Board;
