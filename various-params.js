/**
 * for a given string tellme whether it has even number of characters or not 
 */



function evenSizedString(str) {
    const size = str.length;
    if (size % 2 === 0) {
        console.log('Even Size')
        return true;
    }
    else {
        console.log('Odd Size')
        return false;
    }
    console.log(str, size)
}
evenSizedString('Dhaka')
evenSizedString('Faka')

function doDoubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3
        return result;
    }
}

// console.log(doDoubleOrTriple(5, true))
// console.log(doDoubleOrTriple(5, false))

function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}

// numberOfElements([12, 23, 35, 45, 1234, 345, 24, 231])


function getAge(persion) {
    const age = persion.age;
    return age;
}

const persion = {
    name: 'DDK',
    age: 224,
}