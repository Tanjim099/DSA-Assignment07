// function addStrings(num1, num2) {
//     let sum = '';
//     let carry = 0;
//     let i = num1.length - 1;
//     let j = num2.length - 1;

//     while (i >= 0 || j >= 0 || carry !== 0) {
//         const digit1 = i >= 0 ? Number(num1.charAt(i)) : 0;
//         const digit2 = j >= 0 ? Number(num2.charAt(j)) : 0;
//         const currentSum = digit1 + digit2 + carry;

//         sum = (currentSum % 10) + sum;
//         carry = Math.floor(currentSum / 10);

//         i--;
//         j--;
//     }

//     return sum;
// };


// const num1 = "11";
// const num2 = "123";
// console.log(addStrings(num1, num2));








const s = "Let's take LeetCode contest";

const a = s.split(" ");
for(let i = a.length-1; i>=0; i--){
    console.log(a[i])
}
console.log(a)