const { add } = require("./login");
console.log(add(1, 2));
import { isArray } from "./libs/array";
// import array from "./libs/array";

//
console.log(isArray(3));
console.log(isArray("1,2,3,4"));
console.log(isArray([1, 2, 3, 4]));

// console.log(array.isArray(3));
// console.log(array.isArray("1,2,3,4"));
// console.log(array.isArray([1, 2, 3, 4]));

// export const add = (a, b) => {
//   return a + b;
// };
