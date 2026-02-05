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
// console.log(theResult)




function make_avg(avgOfNum) {
    let sum = 0;
    for (const num of avgOfNum) {
        sum = sum + num;
    }
    // console.log(sum)
    let avg_num = sum / avgOfNum.length
    return avg_num;
}


const avg_array = [2, 4, 6, 8]

const avg = make_avg(avg_array)
// console.log(avg)
// console.log(make_avg([44, 55, 66, 77, 88, 999, 11, 222, 33,412431234,123412341,123412341,132412341,]))


function getMenu() {
 
    console.log("Burger, Pizza, Pasta");
}