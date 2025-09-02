const { getInitials, createSlug, average } = require("./snack.js");
// snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Andrea Moscatelli")).toBe("AM");
  expect(getInitials("Luca Bianchi")).toBe("LB");
});

// snack 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlug("JAVASCRIPT")).toBe("javascript");
  expect(createSlug("Javascript")).toBe("javascript");
  expect(createSlug("JAVA SCRIPT")).toBe("java script");
});

// snack 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
  expect(average([10, 12, 11])).toBe(11);
});
