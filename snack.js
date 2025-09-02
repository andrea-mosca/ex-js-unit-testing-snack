function getInitials(nomeIntero) {
  const [nome, cognome] = nomeIntero.split(" ");
  return `${nome.charAt(0)}${cognome.charAt(0)}`;
}

function createSlug(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(array) {
  let totale = 0;
  for (let i = 0; i < array.length; i++) {
    totale = totale + array[i];
  }
  return totale / array.length;
}
module.exports = { getInitials, createSlug, average };
