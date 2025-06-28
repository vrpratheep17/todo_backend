import { Todo } from "../01_core/Todo";

export type TodoRepository = {
  create: (todo: Todo) => Promise<Todo>;
  findAll: () => Promise<Todo[]>;
};
