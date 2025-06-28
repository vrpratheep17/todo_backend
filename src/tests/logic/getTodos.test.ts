import { getTodos } from "../../02_logic/use-cases/GetTodos";
import { TodoRepository } from "../../02_logic/repositories";
import { Todo } from "../../01_core/Todo";

describe("getTodos", () => {
  it("should return all todos from the repo", async () => {
    const fakeData: Todo[] = [
      { id: "1", title: "One", completed: false, createdAt: new Date() },
      { id: "2", title: "Two", completed: true, createdAt: new Date() },
    ];

    const fakeRepo: TodoRepository = {
      create: async (todo: Todo) => todo,
      findAll: async () => fakeData,
    };

    const getTodosHandler = getTodos(fakeRepo);

    const result = await getTodosHandler();

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("One");
    expect(result[1].completed).toBe(true);
  });
});
