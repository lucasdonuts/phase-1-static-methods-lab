class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const wordArray = string.split(' ');
    const ignoredWords = [
      'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
    ]

    return wordArray.map((word, index) => {
      if(!ignoredWords.includes(word) || index == 0) {
        return this.capitalize(word);
      }
      return word;
    }).join(' ');
  }
}

const string = "the road to el dorado"

console.log(Formatter.titleize(string))