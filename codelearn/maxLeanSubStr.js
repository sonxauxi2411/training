/* 
    Cho xâu kí tự str chỉ chứa các kí tự chữ cái in thường. Hãy tìm độ dài lớn nhất của xâu con của str mà kí tự đầu tiên và
    kí tự cuối cùng của xâu con đó là giống nhau

Ví dụ:

Với str = "geeks", kết quả của hàm maxLenSubStr(str) = 2.
"ee" là xâu con của str mà kí tự đầu tiên và kí tự cuối cùng là giống nhau.

Với str = "abcda", kết quả của hàm maxLenSubStr(str) = 5.
"abcda" là xâu con của str mà kí tự đầu tiên và kí tự cuối cùng là giống nhau.

Đầu ra/đầu vào:
[Thời gian chạy] 0.5 seconds 
[Đầu vào] string str
xâu kí tự chỉ chứa các kí tự chữ cái in thường

Điều kiện tiền đề:
0 ≤ str.length ≤ 10000.

[output] số nguyên
**/

function maxLenSubStr(str) {
    let maxLength = 1;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

console.log(maxLenSubStr('gekes'))