function insertDash(word) {
  const pattern = /[^a|e|i|o|u|\s]{2}/gim;
  const splitWord = word.split(pattern);
  const dashedConsonant = word.match(pattern);
  if (!dashedConsonant) return word;
  const fullWord = [];
  let count = 0;
  for (let i = 0; i < dashedConsonant.length; i += 1) {
    fullWord.push(splitWord[count]);
    fullWord.push(`${dashedConsonant[count][0]}-${dashedConsonant[count][1]}`);
    count += 1;
  }
  fullWord.push(splitWord.slice(-1));
  return fullWord.join('');
}
module.exports = insertDash;
