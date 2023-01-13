import React from "react";

import { Wrapper } from "./Wrapper";
import { TodoProvider } from "../TodoContext/TodoContex";

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Cortar Pan', completed: false },
//   { text: 'Terminar curso intro a react', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <Wrapper/>
    </TodoProvider>
  );
}

export default App;
