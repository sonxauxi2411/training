/* 
    Cho một mảng các số nguyên. Trên mỗi lần di chuyển, bạn được phép tăng chính xác từng phần tử của nó thêm 1.
    Tìm số lần di chuyển tối thiểu cần thiết để có được một chuỗi tăng dần từ đầu vào.

Ví dụ:

Với inputArray = [1, 1, 1], thì kết quả là
arrayChange(inputArray) = 3.
Đầu vào/Đầu ra:

[Giới hạn thời gian chạy] 0.5 seconds 

[Đầu vào] array.integer inputArray

Điểu kiện tiên đề:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

[Đầu ra] integer

Số lần di chuyển tối thiểu cần thiết để có được một chuỗi tăng dần từ inputArray.
Chắc chắn rằng các testcases đã cho có câu trả lời luôn phù hợp với kiểu số nguyên 32 bit có dấu.
**/


function arrayChange(inputArray) {
    let moves = 0;

    for (let i = 1; i < inputArray.length; i++) {
        // Kiểm tra xem phần tử hiện tại có lớn hơn hoặc bằng phần tử trước đó không
        if (inputArray[i] <= inputArray[i - 1]) {
            // Tăng giá trị của phần tử hiện tại để đảm bảo chuỗi là tăng dần
            moves += inputArray[i - 1] - inputArray[i] + 1;
            // Cập nhật giá trị của phần tử hiện tại
            inputArray[i] = inputArray[i - 1] + 1;
        }
    }

    return moves;
}