import { Todo } from "../01_core/Todo";
import { TodoRepository } from "../02_logic/repositories";
import { Collection, Db } from "mongodb";

export const createTodoRepositoryMongo = (db: Db): TodoRepository => {
  const collection: Collection<Todo> = db.collection("todos");

  return {
    create: async (todo) => {
      await collection.insertOne(todo);
      return todo;
    },
    findAll: async () => {
      return collection.find({}).toArray();
    },
  };
};
