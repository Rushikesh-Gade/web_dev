const sentence = "The fox is quick. The fox is smart.";

function countWord(text, word) {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
  return words.filter(w => w === word).length;
}

console.log("fox count:", countWord(sentence, "fox"));
