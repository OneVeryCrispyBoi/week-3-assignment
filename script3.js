// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
let limit = 0;
let pattern1 = " # # # #";
let pattern2 = "# # # # ";
for (let index = 1; index <= limit; index++) {
    if (index % 2 == 0) {
        console.log(pattern2);
    } else {
        console.log(pattern1)
    }
    
}