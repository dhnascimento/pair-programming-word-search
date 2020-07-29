const transpose = require('./transpose');
// 1# find word vetically that is also the length of the array
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }   
  };
  let transposedLetters = transpose(letters);
  transposedLetters = transposedLetters.map(ls => ls.join(''));
  for (l of transposedLetters) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;