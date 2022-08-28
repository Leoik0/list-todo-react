import React from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.querySelector("#outlined-basic").value = "";
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", alignItemns: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
          fullWidth
        />
        <Button
          variant="outlined"
          onClick={() => {
            todoCreate(text);
          }}
        >
          Add
        </Button>
      </div>
    </Paper>
  );
};

export default Form;
