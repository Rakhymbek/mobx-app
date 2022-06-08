import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Todo } from "../models/Todo";
import { useStore } from "../provider";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Button, Checkbox, TextField } from "@mui/material";

export const TodoItem: FC<{ todo: Todo }> = observer(({ todo }) => {
  const { store } = useStore();
  const doneTodo = () => {
    if (todo.completed) {
      return "line-through";
    }
    return "none";
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "4px",
        display: "flex",
        borderRadius: "4px",
        margin: "10px 0",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        value={todo.text}
        onChange={(e) => {
          todo.setText(e.target.value);
        }}
        style={{
          fontSize: "16px",
          width: "340px",
          textDecoration: doneTodo(),
        }}
      />
      <Checkbox
        checked={todo.completed}
        onChange={() => {
            todo.setCompleted(!todo.completed)
        }}
      />
      <Button
        type="submit"
        onClick={() => {
          store.removeTodo(todo);
        }}
      >
        <DeleteOutlinedIcon fontSize="medium"/>
      </Button>
    </div>
  );
});
