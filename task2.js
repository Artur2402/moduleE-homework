function checkingTheObject(str, obj) {
    return (str in obj)
}

const obj1 = {a: '1'};
let obj2 = Object.create(obj1);
obj2.b = '2';

console.log(checkingTheObject('c', obj2));