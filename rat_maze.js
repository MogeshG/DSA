function ratinmaze1(maze) {
    const solution = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(0));
    const visited = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(false));

    const directions = ['U', 'D', 'L', 'R'];

    function isSafe(x, y) {
        return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 1 && !visited[x][y];
    }

    function solve(x, y, path) {
        if (x === maze.length - 1 && y === maze[0].length - 1) {
            solution[x][y] = 1;
            console.log("Solution path:", path);
            return true;
        }

        if (isSafe(x, y)) {
            solution[x][y] = 1;
            visited[x][y] = true;

            for (let dir of directions) {
                let nextX = x, nextY = y;
                switch (dir) {
                    case 'U':
                        nextX--;
                        break;
                    case 'R':
                        nextY++;
                        break;
                    case 'D':
                        nextX++;
                        break;
                    case 'L':
                        nextY--;
                        break;
                }
                if (solve(nextX, nextY, path + dir))
                    return true;
            }

            solution[x][y] = 0;
            visited[x][y] = false;
            return false;
        }

        return false;
    }

    if (!solve(0, 0, '')) {
        console.log("No solution exists");
        return;
    }

    console.log("Solution found:");
    for (let row of solution) {
        console.log(row);
    }
}

function ratinmaze2(maze) {
let sol = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

    if (solveMaze(maze, 0, 0, sol) == false) {
        console.log("Solution doesn't exist");
        return false;
    }
    for (let i = 0; i < N; i++)
        {
            let a=[];
            for (let j = 0; j < N; j++) 
            {
                a.push(sol[i][j]);
            }
            console.log(a.join(""))
        }
    return true;


    function solveMaze(maze, x, y, sol) {
        if (x == N - 1 && y == N - 1)
        {
            sol[x][y] = 1;
            return true;
        }

        if (isSafe(maze, x, y) == true) 
        {

            sol[x][y] = 1;
            for (let i = 1; i <= maze[x][y] && i < N; i++) {

                if (solveMaze(maze, x + i, y, sol) == true) 
                {
                    return true;
                }

                if (solveMaze(maze, x, y + i, sol) == true) 
                {
                    return true;
                }
            }
            sol[x][y] = 0;
            return false;
        }
        return false;
    }

    function isSafe(maze, x, y) {
    if (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] != 0){
        return true;
    }
    else
        return false;
    }
}


 
const maze1 = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]];
// ratinmaze1(maze1);

let maze2 = [
    [1, 1, 0, 0],
    [3, 0, 0, 1],
    [3, 0, 3, 1],
    [0, 0, 0, 1]];
var N = maze2.length;
ratinmaze2(maze2);
