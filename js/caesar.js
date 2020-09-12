const caesarize = (string, offset) => {
  // fix JS modulo issue
  const mod = (a, b) => {
    if (a < 0) a = (b - Math.abs(a)) % b;
    return a % b;
  };
  const encoder = (character, offset) => {
    const keyCode = character.charCodeAt();
    const base = character === character.toLowerCase() ? 97 : 65;
    let encodedChar;
    const coord = keyCode - base + offset;
    if (keyCode >= 97 && keyCode <= 122) {
      encodedChar = String.fromCharCode(mod(coord, 26) + base);
    } else if (keyCode >= 65 && keyCode <= 90) {
      encodedChar = String.fromCharCode(mod(coord, 26) + base);
    } else {
      encodedChar = character;
    }
    return encodedChar;
  };
  return [...string].map(char => encoder(char, offset)).join('');
};

export default caesarize;