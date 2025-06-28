import { Todo } from "../01_core/Todo";
import { TodoRepository } from "../02_logic/repositories";

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
