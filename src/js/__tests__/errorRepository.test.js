import ErrorRepository from "../errorRepository";

const repository = new ErrorRepository();

test("check ErrorRepository", () => {
  repository.errors.set(400, "Ошибка неверного запроса");
  repository.errors.set(403, "Ошибка запрещено");
  repository.errors.set(404, "Ошибка не найдено");
  expect(repository.translate(400)).toBe("Ошибка неверного запроса");
});
test("check ErrorRepository", () => {
  repository.errors.set(400, "Ошибка неверного запроса");
  repository.errors.set(403, "Ошибка запрещено");
  repository.errors.set(404, "Ошибка не найдено");
  expect(repository.translate(500)).toBe("Unknown error");
});
