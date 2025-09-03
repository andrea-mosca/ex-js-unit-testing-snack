function getInitials(nomeIntero) {
  const [nome, cognome] = nomeIntero.split(" ");
  return `${nome.charAt(0)}${cognome.charAt(0)}`;
}

function createSlug(str) {
  if (str.length === 0) {
    throw new Error("il titolo non può essere vuoto");
  } else {
    return str.toLowerCase().replaceAll(" ", "-");
  }
}

function average(array) {
  let totale = 0;
  for (let i = 0; i < array.length; i++) {
    totale = totale + array[i];
  }
  return totale / array.length;
}

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");

  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error("L'ID passato non è un valore numerico");
  }
  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("è stato passato un array errato");
    }
  });
  return posts.find((p) => p.id === id) || null;
}
function addPost(posts, post) {
  posts.find((p) => {
    if (p.id === post.id) {
      throw new Error("post con id già esistente");
    }
  });
  posts.find((p) => {
    if (p.slug === post.slug) {
      throw new Error("slug già esistente");
    }
  });

  posts.push(post);
}

function removePost(posts, id) {
  const rimuovere = posts.findIndex((p) => p.id === id);
  posts.splice(rimuovere, 1);
}
module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
};
