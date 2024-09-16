class Formatter {
  static capitalize(str) {
    if (str.length === 0) {
      return str; 
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    if (str.length === 0) {
      return str;
    }
    return str.replace(/[^a-zA-Z0-9\-'\s]/g, '');
  }
  static titleize(str) {
  const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    
    return str.split(' ').map((word, index) => {
        // Always capitalize the first word
        if (index === 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // If the word is an exception, leave it lowercase
        if (exceptions.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        // Otherwise, capitalize the word
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

}


Formatter.capitalize();
Formatter.sanitize();
Formatter.titleize();