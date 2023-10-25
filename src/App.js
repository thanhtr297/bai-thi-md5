import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Tour/Home";
import Create from "./Tour/Create";
import Update from "./Tour/Update";
import Detail from "./Tour/Detail";

function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/create'} element={<Create/>}></Route>
      <Route path={'/update/:id'} element={<Update/>}></Route>
      <Route path={'/detail/:id'} element={<Detail/>}></Route>
    </Routes>
    </>
  );
}

export default App;
