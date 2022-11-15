class Calculator{
    methods = {
        "-": (a, b) => a - b,
        "+": function add(a, b) { return a + b },
        "*": (a, b) => a * b    };
    //["2", "+" ,"5"]
    calculate = function (str) {
        let split = str.split(' ') //returns an array split on a certain pattern
        let a = Number(split[0])
        let op = split[1]
        let b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) { //these conditions have to return TRUE for it to go into the if block
            return NaN;
        }
        console.log(this.methods)
        return this.methods[op](a,b);
    };
    addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
let powerCalc = new Calculator();
// let result4 = powerCalc.calculate("2 + 3");
// let result5 = powerCalc.calculate("10 - 7")
// console.log( result4 ); // 8
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result5 = powerCalc.calculate("2 hello 3");
console.log( result5 ); // 8
// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8
let result2 = powerCalc.calculate("4 * 8");
console.log( result2 ); // 8
// let result3 = powerCalc.calculate("2 &&& 3");
// console.log( result3 ); // 8