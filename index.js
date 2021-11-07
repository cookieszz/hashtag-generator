const generateHashtag = (str) => {
  const strArray = str.split(' ').filter((s) => s);
  const trimedStr = strArray.join('');
  if (trimedStr && trimedStr.length < 140) {
    return `#${strArray.map((s) => s[0].toUpperCase() + s.substring(1)).join('')}`;
  }
  return false;
};

module.exports = generateHashtag;
