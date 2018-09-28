const appendArrayElementsWithLimitAndCondition = (
  array1,
  array2,
  limit,
  condition,
) => {
  for (let i = 0; i < array2.length && limit > array1.length; i++) {
    if (array2[i][condition]) {
      array1.push(array2[i]);
    }
  }
};

export default {
  appendArrayElementsWithLimitAndCondition,
};
