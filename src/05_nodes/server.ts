import express from "express";
import { connectToDatabase } from "../05_nodes/database";
import { createTodoRepositoryMongo } from "../04_adopters/TodoRepositoryMongo";
import { createTodoRoutes } from "../03_edges/TodoRoutes";

const app = express();
app.use(express.json());

const PORT = 3000;

const startServer = async () => {
  const db = await connectToDatabase();

  const todoRepo = createTodoRepositoryMongo(db);

  app.use("/api", createTodoRoutes(todoRepo));

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
