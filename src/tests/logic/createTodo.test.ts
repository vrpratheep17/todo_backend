import { createTodo } from "../../02_logic/use-cases/CreateTodo";
import { TodoRepository } from "../../02_logic/repositories";
import { Todo } from "../../01_core/Todo";

describe("createTodo", () => {
  it("should create a todo with the given title", async () => {
    // fake repository for testing
    const fakeRepo: TodoRepository = {
      create: async (todo: Todo) => todo,
      findAll: async () => [],
    };

    const input = { title: "Test my use case" };
    const createTodoHandler = createTodo(fakeRepo);

    // Act
    const result = await createTodoHandler(input);

    // Assert
    expect(result.title).toBe("Test my use case");
    expect(result.completed).toBe(false);
    expect(result.id).toBeDefined();
    expect(result.createdAt).toBeInstanceOf(Date);
  });
});
