import './style/App.css'
import {Route, Routes} from "react-router-dom";
import Layouts from "./Layout/Layouts.jsx";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layouts/>}/>
            </Routes>
        </div>
    )
}

export default App
