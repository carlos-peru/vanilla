const appendArrayElementsWithLimit = (array1, array2, limit) => {
  for (let i = 0; i < array2.length && limit > array1.length; i++) {
    array1.push(array2[i]);
  }
};

export default {
  appendArrayElementsWithLimit,
};
