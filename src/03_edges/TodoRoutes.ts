import { Router, Request, Response } from "express";
import { createTodo } from "../02_logic/use-cases/CreateTodo";
import { getTodos } from "../02_logic/use-cases/GetTodos";
import { TodoRepository } from "../02_logic/repositories";

export const createTodoRoutes = (repo: TodoRepository) => {
  const router = Router();

  const createTodoHandler = createTodo(repo);
  const getTodosHandler = getTodos(repo);

  router.post("/todos", async (req: Request, res: Response) => {
    const { title } = req.body;
    const todo = await createTodoHandler({ title });
    res.json(todo);
  });

  router.get("/todos", async (_req: Request, res: Response) => {
    const todos = await getTodosHandler();
    res.json(todos);
  });

  return router;
};
