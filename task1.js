function searchOwnKey(obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}` );
        }
    }
}

const obj1 = {a: 1};
searchOwnKey(obj1);

let obj2 = Object.create(obj1);
obj2.b = 2;
searchOwnKey(obj2);