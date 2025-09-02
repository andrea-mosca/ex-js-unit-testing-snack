const { getInitials } = require("./snack.js");
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Andrea Moscatelli")).toBe("AM");
  expect(getInitials("Luca Bianchi")).toBe("LB");
});
