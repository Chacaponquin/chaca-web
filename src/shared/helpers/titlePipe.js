export const titlePipe = (text) => {
  let returnString = "";

  let mayus = true;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && text[i] !== "_" && text[i] !== "-") {
      returnString = returnString.concat(
        mayus ? text[i].toUpperCase() : text[i].toLowerCase()
      );
      mayus = false;
    } else {
      mayus = true;
      continue;
    }
  }

  return returnString;
};
