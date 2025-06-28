import { Todo } from "../domain/Todo";
import { TodoRepository } from "../application/repositories";

export const createTodoRepositoryMemory = (): TodoRepository => {
  const todos: Todo[] = [];

  return {
    create: async (todo) => {
      todos.push(todo);
      return todo;
    },
    findAll: async () => {
      return todos;
    },
  };
};
