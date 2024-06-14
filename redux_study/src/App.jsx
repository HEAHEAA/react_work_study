import './_style/App.css'
import Counter from "./feature/counter/Counter.jsx";
import Dummys from "./sections/dummy/Dummys.jsx";
import Board from "./sections/boards/Board.jsx";
import {Route, Router, Routes} from "react-router-dom";
import Todo from "./sections/todo/Todo.jsx";
import Notice from "./sections/notice/Notice.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<div><Counter/></div>}/>
            <Route path="/dummy" element={<div><Dummys/></div>}/>
            <Route path="/board" element={<div><Board/></div>}/>
            <Route path="/todo" element={<div><Todo/></div>}/>
            <Route path="/notice" element={<Notice/>}/>
        </Routes>
    )
}

export default App
