/* 
    Cho một mảng các số nguyên, bạn hãy viết hàm kiểm tra xem các phần tử của mảng có tạo thành một dãy số tăng dần hoặc giảm dần hay không, nếu có return true, ngược lại return false.

Ví du

Với sequence = [1, 4, 5, 7, 9], thì kết quả là isMonotonous(sequence) = true
Với sequence = [0], thì kết quả là isMonotonous(sequence) = true;
Với sequence = [3, 3], thì kết quả là isMonotonous(sequence) = false.
Giải thích: 2 phần tử bằng nhau không tạo thành dãy tăng hay dãy giảm.
Đầu vào/Đầu ra

[Thời gian chạy] 0.5 giây

[Đầu vào] array.integer sequence
Điều kiện:
1 ≤ sequence.length ≤ 10,
-250 ≤ sequence[i] ≤ 250.

[Đầu ra] boolean

true nếu sequence là dãy tăng hoặc dãy giảm, false trong trường hợp ngược lại.
**/

function isMonotonous(sequence) {
  // code here
  if (sequence.length === 1) {
    return true;
    }
    let direction = sequence[1] - sequence[0];
    for (var i = 0; i < sequence.length - 1; i++) {
        if (direction * (sequence[i + 1] - sequence[i]) <= 0) {
            return false;
        }
    }
    return true;
}

isMonotonous([1, 4, 5, 7, 9])
isMonotonous([0])
isMonotonous([3,3])