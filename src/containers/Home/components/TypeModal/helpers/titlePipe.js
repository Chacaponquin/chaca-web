export const titlePipe = (name) => {
  let newName = name.toLowerCase();

  return newName[0].toUpperCase() + newName.substring(1);
};
