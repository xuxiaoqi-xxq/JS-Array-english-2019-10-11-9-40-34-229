// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("Variable 'a' is a string, variable 'b' is an array");

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(ele => {
    return ele * 2;
});
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var colors1 = colors.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});
console.log(colors1);
// case 2 output: 'Red+Green+White+Black'
var colors2 = colors.join('+');
console.log(colors2);
// case 3 output: 'Red,Green,White,Black'
var colors3 = colors.join(',')
console.log(colors3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(val1, val2) {
    if (val1 > val2) {
        return -1;
    } else if (val1 < val2) {
        return 1;
    } else {
        return 0;
    }
}
a.sort(compare);
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count = {}; // 统计每个值出现的次数
a.forEach(ele => {
    if (!count[ele]) {
        count[ele] = 1;
    } else {
        count[ele]++;
    }
});
var maxKey = a[0];
Object.keys(count).forEach(ele => {
    if (count[maxKey] < count[ele]) {
        maxKey = ele;
    }
})
console.log(maxKey);