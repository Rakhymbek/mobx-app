import { Button, TextField } from "@mui/material";
import { FC, useState, FormEventHandler } from "react";
import { useStore } from "../provider";

export const TodoForm: FC = () => {
  const { store } = useStore();
  const [value, setValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    store.createTodo(value);
    setValue("");
  };

  return (
    <form
      style={{
        marginBottom: "20px",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        gap: 5
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        variant="outlined"
        label="Type tasks"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          fontSize: "20px",
          width: "350px",
          boxSizing: "border-box",
        }}
      />
      <Button sx={{padding: '16px'}} type="submit" variant="contained">
        Add Task
      </Button>
    </form>
  );
};
