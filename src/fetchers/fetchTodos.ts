import axios from "axios";
import { Todo } from "../models/Todo";

export const fetchTodos = () => {
  return axios
    .get(
      "https://jasacademy-236d5-default-rtdb.europe-west1.firebasedatabase.app/todos.json?api_key=AIzaSyA6rb1SUwsAoeBdpmOoGptM_FnrUAuxRhk"
    )
    .then((res) => res.data);
};

export const putTodos = (data: Todo[]) => {
  return axios
    .put(
      "https://jasacademy-236d5-default-rtdb.europe-west1.firebasedatabase.app/todos.json?api_key=AIzaSyA6rb1SUwsAoeBdpmOoGptM_FnrUAuxRhk",
      data
    )
    .then((res) => res.data);
};
