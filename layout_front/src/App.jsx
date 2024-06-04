import './style/App.css'
import {Route, Routes} from "react-router-dom";
import {Layouts} from "./component/layoutPage/Layouts.jsx";
import {ReactQueryDevtools} from "react-query/devtools";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layouts/>}/>
            </Routes>
            {/*<ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>*/}
        </div>
    )
}

export default App
