import { Todo } from "../../domain/Todo";
import { TodoRepository } from "../repositories";

export const getTodos = (repo: TodoRepository) => async (): Promise<Todo[]> => {
  return repo.findAll();
};
