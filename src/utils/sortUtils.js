export const advancedSort = (data = []) => {
  return data.sort((a, b) => {
    if (a.errors > b.errors) {
      return 1;
    } else if (a.errors < b.errors) {
      return -1;
    } else {
      if (a.uniqueCharacters < b.uniqueCharacters) {
        return 1;
      } else if (a.uniqueCharacters > b.uniqueCharacters) {
        return -1;
      } else {
        if (a.length < b.length) {
          return 1;
        } else if (a.length > b.length) {
          return -1;
        } else {
          return a.timestamp - b.timestamp;
        }
      }
    }
  });
};
