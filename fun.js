function PrintCoolString(str) {
  const lowerAlphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperAlphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let cool = [];
  for (let i = 0; i < str.length; i++) {
    let isUpperCase =
      str[i] === str[i].toUpperCase() && str[i].match(/[a-zA-Z]/);
    let alphabets = isUpperCase ? upperAlphabets : lowerAlphabets;
    if (!lowerAlphabets.includes(str[i].toLowerCase())) {
      cool[i] = str[i];
      console.log(cool.join(""));
      continue;
    }
    for (let j = 0; j < alphabets.length; j++) {
      cool[i] = alphabets[j];
      console.log(cool.join(""));
      if (str[i] == alphabets[j]) {
        break;
      }
    }
  }
}

PrintCoolString("Hello World!");
