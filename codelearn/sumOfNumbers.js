/* 
Cho 1 tập hợp chứa số nguyên dương

Hãy tính tổng các số từ 1 tới n mà chia hết cho 1 trong các số trong tập hợp trên.

Ví dụ:

Với arr=[1,2,3], n = 4, thì sumOfNumbers(arr,n) = 10

Với arr=[11], n = 10, thì sumOfNumbers(arr,n) = 0

**/

function sumOfNumbers(arr, n) {
  let result = 0;
  for (let i = 1 ; i <= n ; i++){
    for (let j = 0 ; j < arr.length; j++){
        if (i % arr[j] ===0){
            result += i;
            break
        }
    }
  }
  return result
}

sumOfNumbers([1,2,3], 4)