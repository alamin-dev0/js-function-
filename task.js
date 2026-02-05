function multiplyNumber(num1, num2, num3, num4) {
    const multiply = num1 * num2 * num3 * num4;
    return multiply;
}

const multiplyValue = multiplyNumber(4, 3, 6, 5)
// console.log(multiplyValue)




function OddEven(number) {
    if (number % 2 === 1) {
        number = number * 2
    }
    else if (number % 2 === 0) {
        number = number / 2;
    }
    return number;
}

const theNumber = 100;

const theResult = OddEven(theNumber)
console.log(theResult)