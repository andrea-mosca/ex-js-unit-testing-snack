const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
} = require("./snack.js");

// * ORGANIZZAZIONE CON DESCRIBE

// * STRINGHE
describe("MANIPOLATORE DI STRINGHE", () => {
  // snack 1
  test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Andrea Moscatelli")).toBe("AM");
    expect(getInitials("Luca Bianchi")).toBe("LB");
  });

  // snack 5
  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("yamamay")).toBeTruthy();
  });
});

let posts = [];
beforeEach(() => {
  posts = [
    {
      id: 1,
      title: "Introduzione a JavaScript",
      slug: "introduzione-a-javascript",
    },
    {
      id: 2,
      title: "Guida a React",
      slug: "guida-a-react",
    },
    {
      id: 3,
      title: "Node.js per principianti",
      slug: "nodejs-per-principianti",
    },
    {
      id: 4,
      title: "Come usare Express",
      slug: "come-usare-express",
    },
    {
      id: 5,
      title: "Imparare Git e GitHub",
      slug: "imparare-git-e-github",
    },
  ];
});
afterEach(() => {
  posts = [];
});

// * ARRAY
describe("MANIPOLATORE DI ARRAY", () => {
  // snack 3
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([10, 12, 11])).toBe(11);
  });
  //   snack 7
  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    const post = {
      id: 1,
      title: "Introduzione a JavaScript",
      slug: "introduzione-a-javascript",
    };
    expect(findPostById(posts, 1)).toEqual(post);
    expect(() => findPostById(post, "uno")).toThrow(
      "L'ID passato non è un valore numerico"
    );
    expect(findPostById(posts, 10)).toBe(null);
    expect(() => findPostById([12, 356, 4], 1)).toThrow(
      "è stato passato un array errato"
    );
  });

  // snack 8
  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    addPost(posts, { id: 6, title: "nuovo post", slug: "nuovo-post" });
    expect(posts).toHaveLength(6);
  });

  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    removePost(posts, 1);
    expect(posts).toHaveLength(4);
  });
  // snack 9
  test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
    expect(() =>
      addPost(posts, {
        id: 1,
        title: "prova",
        slug: "prova-prova",
      })
    ).toThrow("post con id già esistente");
    expect(() =>
      addPost(posts, {
        id: 7,
        title: "Introduzione a JavaScript",
        slug: "introduzione-a-javascript",
      })
    ).toThrow("slug già esistente");
  });
});

// * SLUG
describe("CREATORE DI SLUG", () => {
  // snack 2
  test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("JAVASCRIPT")).toBe("javascript");
    expect(createSlug("Javascript")).toBe("javascript");
    expect(createSlug("JAVA SCRIPT")).toBe("java-script");
  });

  // snack 4
  test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
  });
  // snack 6
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("il titolo non può essere vuoto");
  });
});
