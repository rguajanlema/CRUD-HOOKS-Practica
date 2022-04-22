import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");

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

  const deleteTask = (id) => {
    const arrayFiltrado = tareas.filter((item) => item.id !== id);
    setTareas(arrayFiltrado);
  };

  const editar = (item) => {
    console.log(item);
    setModoEdicion(true);
    setTarea(item.nombreTarea);
    setId(item.id);
  };

  const editTask = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Elemento Vacio");
      return;
    }

    const arrayEditado = tareas.map((item) =>
      item.id === id ? { id: id, nombreTarea: tarea } : item
    );

    setTareas(arrayEditado);
    setModoEdicion(false);
    setTarea("");
    setId("");
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
            {tareas.map((item) => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.nombreTarea}</span>
                <button
                  className="btn btn-danger btn-sm float-right mx-2"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm float-right"
                  onClick={() => editar(item)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {modoEdicion ? "Edit task" : "Add Task"}
          </h4>
          <form onSubmit={modoEdicion ? editTask : agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Add Task"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />

            {modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit">
                Edit
              </button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
