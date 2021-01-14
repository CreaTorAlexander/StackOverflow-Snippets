const mainObj = {"a": 0, "b": 0, "c": 0, "d": 1};
const obj1 = {"d": 1, "e": 0};
const obj2 = {"a": 1, "b": 0};
const obj3 = {"a": 0, "d": 1};
const obj4 = {"a": 0, "b": 0, "c": 0, "d": 1};


const compareObj = (objA, objB) => {
  let res  = true;
  Object.keys(objB).forEach(key => {
    if(!objA.hasOwnProperty(key) || objA[key] !== objB[key]) {
      res = false;
    }
  })
  return res;
}

console.log(compareObj(mainObj, obj1));
console.log(compareObj(mainObj, obj2));
console.log(compareObj(mainObj, obj3));
console.log(compareObj(mainObj, obj4));