import { makeAutoObservable } from "mobx";
import { Todo } from "./Todo";
import { fetchTodos, putTodos } from "../fetchers/fetchTodos";

export class Store {
  todos: Todo[] = [];
  loading: boolean = false;

  constructor(todos: Todo[]) {
    this.todos = todos;
    makeAutoObservable(this);
  }

  createTodo(text: string) {
    const todo = new Todo();
    todo.setText(text);
    this.addTodo(todo);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => item !== todo);
  }

  *loadTodos() {
    this.loading = true;
    try {
      const data: Todo[] = yield fetchTodos();
      console.log("fetched", data);
      this.todos = data.map((item) => new Todo().setTodo(item)) || [];
    } catch (e) {
      console.log("error while fetching todos", e);
    } finally {
      this.loading = false;
    }
  }

  *saveTodos() {
    yield putTodos(this.todos);
  }
}

export const store = new Store([]);

