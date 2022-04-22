import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Elemento basio");
      return;
    }
    console.log(tarea);

    setTareas([...tareas, { id: shortid.generate(), nombreTarea: tarea }]);
    setTarea("");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      {/*add separater*/}
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">List Task</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Name of the Task</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                Delete
              </button>
              <button className="btn btn-warning btn-sm float-right">
                Edit
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Add Task"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
