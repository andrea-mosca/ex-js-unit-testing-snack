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
module.exports = { getInitials, createSlug, average, isPalindrome };
