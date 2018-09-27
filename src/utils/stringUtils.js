const isBlank = str => !str || !str.trim();

const isAlphaNumericWithSpaces = str => {
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char !== " " && !isAlphaNumericChar(char)) {
      return false;
    }
  }
  return true;
};

const isAlphaNumericChar = ch => {
  const regex = /^[a-z0-9]+$/i;
  return ch.match(regex) !== null;
};

export default {
  isBlank,
  isAlphaNumericWithSpaces,
};
