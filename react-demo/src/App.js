import Buttons from "./Buttons.js";


const App = ()=> {
    return <div><h1 >Useful Websites</h1>
           <h3>Which websites do you want to open?</h3>
            <Buttons name="Google" link="https://google.com" />
            <Buttons name="Youtube" link="https://youtube.com" />
            <Buttons name="Facebook" link="https://facebook.com" />
             <br></br>
            <Buttons name="Github" link="https://github.com" />
            <Buttons name="Amazon" link="https://amazon.com" />
            <Buttons name="React" link="https://react.com" />
        </div>
}
export default App;