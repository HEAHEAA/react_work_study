import './_style/App.css'
import GoogleLoginBtn from "./components/GoogleLoginBtn.jsx";
import Counter from "./feature/counter/Counter.jsx";

function App() {
  return (
    <div>
      <GoogleLoginBtn/>
        <br/>

        <Counter/>
    </div>
  )
}


export default App
