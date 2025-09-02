function getInitials(nomeIntero) {
  const [nome, cognome] = nomeIntero.split(" ");
  return `${nome.charAt(0)}${cognome.charAt(0)}`;
}
module.exports = { getInitials };
