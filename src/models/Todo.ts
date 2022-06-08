import { makeAutoObservable } from "mobx";

let idx = 0;
export class Todo {
  id?: string = undefined;
  text: string = "";
  created?: Date = undefined;
  completed?: boolean = undefined;

  constructor() {
    this.created = new Date();
    this.id = this.created.getTime().toString() + idx++;
    this.completed = false;
    makeAutoObservable(this);
  }

  setTodo({ id, text, created, completed }: Todo) {
    this.id = id;
    this.text = text;
    this.created = created;
    this.completed = completed;

    return this;
  }

  setText(text: string) {
    this.text = text;
  }

  setCompleted(completed: boolean) {
    this.completed = completed;
  }
}
