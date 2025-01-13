import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {}

const Todo: FC<IProps> = (props) => {
  return (
    <>
      <div>Todo</div>
      <button>
        <Link to="/todo/edittodo">edit todo</Link>
      </button>
      <button>
        <Link to="/todo/addtodo">add todo</Link>
      </button>
      <button>
        <Link to="/todo/detailtodo">detail todo</Link>
      </button>
    </>
  );
};

export default Todo;
