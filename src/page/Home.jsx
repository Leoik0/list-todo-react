import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    let todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <ToDoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Home;
