function iterateOverProperties(obj) {
    let str = ""
    console.log(Object.getPrototypeOf(obj))

    for (let prop in obj) {
        if ((obj.hasOwnProperty(prop))
            && (typeof (obj[prop]) != "function")
            && (prop in proto)) {
            str = str + prop + " = " + obj[prop] + " , ";
        }
    }
    return str
}

// Dummy prototype
const proto = {
    a: 0,
    b: 0,
    c: 0
};

// Dummy object inheriting from proto
const obj = Object.create(proto);
obj.a = 1;
obj.b = 2;
obj.c = function() {}; // Should be skipped (function)
obj.d = 4; // Not in proto, should be skipped

console.log(iterateOverProperties(obj)); 