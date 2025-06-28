import express from "express";
import { createTodoRepositoryMemory } from "./Adopters/TodoRepositoryMemory";
import { createTodoRoutes } from "./Edges/TodoRoutes";

const app = express();
app.use(express.json());

const todoRepo = createTodoRepositoryMemory();

app.use("/api", createTodoRoutes(todoRepo));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
