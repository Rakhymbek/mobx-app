import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { store } from "../models/Store";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export const Todo = observer(() => {
  useEffect(() => {
    store.loadTodos();
  }, []);

  const TodoWrapper = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const ButtonGroup = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  `;

  return (
    <TodoWrapper>
      <TodoForm />
      {store.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <ButtonGroup>
        <Button variant="outlined" onClick={() => store.saveTodos()}>save todos</Button>
        <Button variant="outlined" onClick={() => store.loadTodos()}>update todos</Button>
      </ButtonGroup>
    </TodoWrapper>
  );
});
