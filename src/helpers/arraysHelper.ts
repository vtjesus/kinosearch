export const compareTwoScalarArrays = (
  arr1: number[] | string[],
  arr2: number[] | string[]
) => {
  return (
    arr1.length === arr2.length &&
    arr1.every(function (val: number | string, i: number) {
      return val === arr2[i];
    })
  );
};
