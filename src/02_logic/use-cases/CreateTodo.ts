import { Todo } from "../../01_core/Todo";
import { TodoRepository } from "../repositories";

type CreateTodoInput = {
  title: string;
};

export const createTodo =
  (repo: TodoRepository) =>
  async (input: CreateTodoInput): Promise<Todo> => {
    const todo: Todo = {
      id: crypto.randomUUID(),
      title: input.title,
      completed: false,
      createdAt: new Date(),
    };
    return repo.create(todo);
  };
