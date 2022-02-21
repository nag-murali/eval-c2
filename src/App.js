import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home";
import {Search} from "./components/searchpage"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/search/:keyword' element={<Search/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
