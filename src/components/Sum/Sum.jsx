export const Sum = (num) => {
  console.log("Sum(num)", num);
  let i = 0;
  if (num <= 0) {
    return 0;
  } else {
    while (i < 2000000000) i++;
  }
  return num;
};
