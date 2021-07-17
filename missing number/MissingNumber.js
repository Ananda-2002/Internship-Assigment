/*
Imagine you have array of integer from 1 to 100 , the numbers are randomly ordered
, one number from 1 to 100 is missing , Please write the code for finding the missing
number
*/



// function to get missing number
function getMissingNo(a) {
    let n = arr.length;
    let total = Math.floor((n + 1) * (n) / 2);  // some of 1 to N natural numbers is n*(n+1)/2

    for (let i = 0; i < n; i++)
        total -= a[i];      // if we subtract all the numbers between 1 to n the we get the missing number.
    return total;
}

// Driver Code
// Assuming that the array contains 100 distinct integers between 1..100
// and empty slot value is zero
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    54, 55, 56, 57, 58, 59, 60, 0, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]; // missing number is 63
let miss = getMissingNo(arr);
console.log(miss);

/*
This algorithm is only usable when only one number is missing.
Time complexity of this algorith is O(n)
*/
