import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Todo from "./todo";
import EditTodo from "./edittodo";
import AddTodo from "./addtodo";
import DetailTodo from "./detailtodo";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <button>
        <Link to="/">home</Link>
      </button>
      <button>
        <Link to="/todo">todo</Link>
      </button>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/todo" Component={Todo}></Route>
        <Route path="/todo/edittodo" Component={EditTodo} />
        <Route path="/todo/addtodo" Component={AddTodo} />
        <Route path="/todo/detailtodo" Component={DetailTodo} />
      </Routes>
    </Router>
  );
}

export default App;
