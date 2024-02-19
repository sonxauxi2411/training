/* 
Một hình chữ nhật có chiều dài là n và chiều rộng là m, được chia thành những ô vuông nhỏ kích thước 1x1.

Hãy đếm xem trong hình chữ nhật đó có tổng cộng bao nhiêu ô vuông và in kết quả ra màn hình.
**/

function countsqquares (m , n) {
    let result = 0
   
    // Math.min(m,n) => trong m và n số nào nhỏ hơn thì trả về số đó
    for (let i =0 ; i <= Math.min(m,n) ; i++){
         //sẽ có hình vuông 1x1, 2x2 , 3x3 ,.. 
        result += (m -i +1) * (n -i + 1)
    }

    return result
}