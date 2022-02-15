function occurrences(text, word) {
  const a = text.split(" ");
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (word === (a[i].toLowerCase()))
      count++;
  }
  return count;
}
module.exports = occurrences;
