const caesarize = (string, offset) => {
  let crypt = '';
  for (let i = 0; i < string.length; i += 1) {
    let char;
    if (string[i].match(/[a-z]/i)) {
      const code = string.charCodeAt(i);
      if ((code >= 65) && (code <= 90)) {
        char = String.fromCharCode(((code - 65 + offset) % 26) + 65);
      }
      if ((code >= 97) && (code <= 122)) {
        char = String.fromCharCode(((code - 97 + offset) % 26) + 97);
      }
    }
    crypt += char;
  }
  return crypt;
};

export default caesarize;