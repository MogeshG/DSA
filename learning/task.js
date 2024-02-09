//user Input
// let grid= [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ];

// let rowSize=board.length;
// let columnSize=board[0].length;

// let res=island(grid,rowSize,columnSize);

// function island(m,rowSize,columnSize){
//     let result=[];
//     let viewed=[];

//     for (let i = 0; i < rowSize; i++) {
//         viewed[i] = [];
//         for (let j = 0; j < columnSize; j++) {
//             viewed[i][j] = 0;
//         }
//     }

//     for(let i=0;i<rowSize;i++){
//         for(let j=0;j<columnSize;j++){
//             if(m[i][j]==word[0]){
//                 path(i,j,0,"");
//             }
//         }
//     }

//     function path(i,j,wordPos,dir){
//         if(wordPos==word.length-1){
//             result.push(dir);
//             return;
//         }
//         if (i + 1 < rowSize && m[i + 1][j] == word[wordPos+1] && viewed[i + 1][j] === 0) {
//             viewed[i][j] = 1;
//             path(i + 1, j, wordPos + 1, dir + "D");
//             viewed[i][j] = 0;
//         }

//         if (j + 1 < columnSize && m[i][j + 1] === word[wordPos+1] && viewed[i][j + 1] === 0) {
//             viewed[i][j] = 1;
//             path(i, j + 1, wordPos + 1,dir + "R");
//             viewed[i][j] = 0;
//         }

//         if (j - 1 >= 0 && m[i][j - 1] === word[wordPos + 1] && viewed[i][j - 1] === 0) {
//             viewed[i][j] = 1;
//             path(i, j - 1, wordPos + 1, dir + "L");
//             viewed[i][j] = 0;
//         }

//         if (i - 1 >= 0 && m[i - 1][j] === word[wordPos + 1] && viewed[i - 1][j] === 0) {
//             viewed[i][j] = 1;
//             path(i - 1, j, wordPos + 1, dir + "U");
//             viewed[i][j] = 0;
//         }
//     }

//     return result;
// }

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];
let row = grid.length;
let column = grid[0].length;
let result = island(row, column);

function island(row, column) {
    let result = [];
    let visited = [];

    for (let i = 0; i < rowSize; i++) {
        viewed[i] = [];
        for (let j = 0; j < columnSize; j++) {
            viewed[i][j] = 0;
        }
    }

    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
            if (m[i][j] == "1") {
                path(i, j, 0, "");
            }
        }
    }

    function path(i, j, val) {
        if (i + 1 < rowSize && visited[i] == 0 && grid[i][j] === "1") {
            visited[i][j] = "1";
            path(i + 1, j, val + 1);
            visited[i + 1][j] = "0";
        }
        if (j + 1 < columnSize && viewed[i][j + 1] === 0 && grid[i][j] === "1") {
            viewed[i][j] = 1;
            path(i, j + 1, wordPos + 1, dir + "R");
            viewed[i][j] = 0;
        }
    }
}
