function getInitials(nomeIntero) {
  const [nome, cognome] = nomeIntero.split(" ");
  return `${nome.charAt(0)}${cognome.charAt(0)}`;
}

function createSlug(str) {
  return str.toLowerCase();
}
module.exports = { getInitials, createSlug };
