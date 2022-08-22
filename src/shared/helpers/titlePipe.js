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

export const descapitilizeArgument = (text) => {
  let returnString = "";
  let mayus = false;

  for (let i = 0; i < text.length; i++) {
    if (i > 0 && i < text.length - 1) {
      if (text[i + 1].toUpperCase() === text[i + 1]) {
        returnString = returnString.concat(`${text[i]} `);
        mayus = true;
      } else {
        returnString = returnString.concat(
          mayus ? text[i].toUpperCase() : text[i].toLowerCase()
        );

        mayus = false;
      }
    } else if (i === 0) {
      returnString = returnString.concat(text[i].toUpperCase());
    } else {
      returnString = returnString.concat(
        mayus ? text[i].toUpperCase() : text[i].toLowerCase()
      );
      mayus = false;
    }
  }

  return returnString;
};
