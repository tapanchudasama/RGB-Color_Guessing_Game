export const generateRandomColors = (num) => {
  // make an array
  var arr = [];
  // add random colors to array
  for (var i = 0; i < num; i++) {
    // getRandomColors
    arr.push(randomColor());
  }
  // return that array
  return arr;
};

export const randomColor = () => {
  // pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

export const pickColor = (array) => {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
};
