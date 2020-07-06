export const numFormat = (num) => {
  num = parseInt(num);
  if (num > 59) num = 59;
  return num > 9 ? num + '' : '0' + num;
}

