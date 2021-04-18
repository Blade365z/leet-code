/*
My Leet Code problem solutions.
These might not be the most optimal solutions.
----YOLO :p
*/



//--------------------------------------------------------------------------------------------------------------------//
//Two Sum problem
var twoSum = function (nums, target) {
    let obj = {}
    let i = 0;
    nums.forEach(num => {
        let j = 0;
        nums.forEach(num2 => {
            if (i !== j) {
                if (num + num2 === target) {
                    obj[num] = {
                        num: num2,
                        index1: j,
                        index2: i
                    }

                }
            }
            j += 1
        })
        i += 1
    })

    let finalArray = {};
    Object.keys(obj).forEach(element => {
        finalArray[obj[element]['index1']] = true;
        finalArray[obj[element]['index2']] = true;
    })
    return Object.keys(finalArray).map(element => element)
};

//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
//Leet Code Adding two number question
function findSum(arr1, arr2) {
    let finalArray = [];
    let carry = 0, sum = 0;
    let maxArrLength = arr1.length > arr2.length ? arr1.length : arr2.length;
    if (arr2.length !== arr1.length) {
        let minArrLength = arr1.length < arr2.length ? arr1.length : arr2.length;
        for (let i = 0; i < maxArrLength - minArrLength; i++) {
            if (arr1.length === maxArrLength) {
                arr2.unshift(0)
            } else {
                arr1.unshift(1)
            }
        }
    }
    for (let i = maxArrLength - 1; i >= 0; i--) {
        let a = arr1[i] ? arr1[i] : 0;
        let b = arr2[i] ? arr2[i] : 0;
        console.log(a, b)
        sum = a + b;
        if (carry === 1) {
            sum += 1;
            carry = 0
        }
        if (sum > 9) {
            carry = 1
            sum = parseInt(sum.toString().split("")[1])
        }

        finalArray.push(sum);

    }

    if (carry === 1) {
        finalArray.push(carry);
    }
    return finalArray.reverse();
}
// let sum = findSum([9, 4, 2], [9, 4, 6, 5]);
//--------------------------------------------------------------------------------------------------------------------//



//--------------------------------------------------------------------------------------------------------------------//
//Leet Code Longest substring without repeating characters question
function findLongestSubstring(s) {
    s = s.split("");
    let i = 0; j = 0;
    let max_length = 0;
    while (j !== s.length) {
        let temp = {};
        for (let k = i; k <= j; k++) {
            if (!temp[s[k]]) {
                temp[s[k]] = true;
            } else {
                temp = {};
                i += 1;
                break;
            }
        }
        let length = Object.keys(temp).length;
        if (length > max_length)
            max_length = length;
        j += 1;
    }
    return max_length;
}
// var longestSubstring = findLongestSubstring("jbpnbwwd")
// console.log(longestSubstring)
//--------------------------------------------------------------------------------------------------------------------//




//--------------------------------------------------------------------------------------------------------------------//
//Median of two sorted arrays
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2];
    const sorted = QuickSort(arr);
    if (sorted.length > 0) {
        if (sorted.length % 2 === 0) {
            let y = Math.floor(sorted.length / 2);
            let x = y - 1;
            return ((sorted[x] + sorted[y]) / 2).toFixed(5)

        } else {
            let x = Math.floor(sorted.length / 2);
            return sorted[x].toFixed(5)
        }
    }
    return sorted.length.toFixed(5)
};
//Quick sort as default sort() uses insertion sort and its slow af.
function QuickSort(arr, left = 0, right = arr.length - 1) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            QuickSort(arr, left, index - 1);
        }
        if (index < right) {
            QuickSort(arr, index, right);
        }
    }
    return arr;
}
function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}
//--------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------------------------------//

