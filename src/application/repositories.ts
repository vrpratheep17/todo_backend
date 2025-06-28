import { Todo } from "../domain/Todo";

export type TodoRepository = {
  create: (todo: Todo) => Promise<Todo>;
  findAll: () => Promise<Todo[]>;
};
