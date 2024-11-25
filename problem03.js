// step 01
let colorsList = ['red', 'blue', 'green'];
colorsList.push('yellow');
console.log(colorsList);

// step 02
colorsList.shift();
console.log(colorsList);

// step 03
colorsList.unshift('purple');
console.log(colorsList);

// step 04
console.log(colorsList.indexOf('blue'));
colorsList.splice(1, 1)

// step 05
let currentArray = [colorsList];
console.log(currentArray);

console.log(colorsList.length);

