import Header from "./components/Header";
import Login from "./components/Login";
import Register from './components/Resister';
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
         <>
         <Header/>
            <Routes>
               <Route path="/" element={<Login/>}>Login</Route>
               <Route path="/register" element={<Register/>}>Login</Route>
            </Routes>
         </>
    </div>
  );
}

export default App;
