/* 
    Bạn có một tờ giấy hình chữ nhật.

    Bạn muốn vẽ n đường thẳng lên trang giấy đó với yêu cầu sau:

    Mỗi đường thẳng phải song song với 1 trong các cạnh của hình chữ nhật.
    Không có 2 đường thẳng nào trùng nhau.
    Không có đường thẳng nào trùng với các cạnh hình chữ nhật.
    Sau khi vẽ xong, bạn sẽ dùng kéo cắt theo những đường bạn đã vẽ, bạn sẽ được m hình chữ nhật nhỏ.

    Hãy tìm cách vẽ để m hình chữ nhật nhỏ thu được là lớn nhất.

**/

function straightLine(n){
    let a = Math.round(n/2)
    //(a+1)*(n-a+1)
    return (a + 1) * (n - a + 1)
    
}

straightLine(2)