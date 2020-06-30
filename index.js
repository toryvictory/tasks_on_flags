'use strict';

/*1. дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет. Если есть - вывести 'есть', если нет - вывести 'нет'.*/
console.log('TASK 1');

const arr1 = ['a', 'b', 'c', 'd', 'e',];
let flag1 = false;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'c') {
        flag1 = true;
    }
}
if (flag1) {
    console.log('есть');
} else {
    console.log('нет');
}

/*    2. необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true, если 'c' есть в массиве, и false - если нет*/
/**
 *
 * @param  {Array} array
 * @returns {boolean} Flag. Is set to true if element 'c' is comprised in the array.
 */
function hasElem(array) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'c') {
            flag = true;
            break;
        }
    }
    return flag;
}

console.log('TASK 2');
console.log(hasElem(arr1));

/*3. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.*/

console.log('TASK 3');

const arr2 = [1, 2, 3, 4, 5,];
let flag2 = false;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 5) {
        flag2 = true;
    }
}
if (flag2) {
    console.log('да');
} else {
    console.log('нет');
}

/*    4. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.*/

console.log('TASK 4');

let flag3 = false;
for (let i = 2; i < 31; i++) {
    if (31 % i === 0) {
        flag3 = true;
    }
}
console.log(flag3);

/*    5.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.*/

console.log('TASK 5');

const arr3 = [4, 35, 66, 34, 34, 665, 434, 22, 31, 1, 35];

let flag4 = false;
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] === arr3[i - 1]) {
        flag4 = true;
    }
}

if (flag4) {
    console.log('да');
} else {
    console.log('нет');
}
