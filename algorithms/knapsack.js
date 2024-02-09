function knapsackdp(c, p, w) {
    let a = new Array(p.length + 1).fill(0);
    for (x in a) {
        a[x] = new Array(c + 1).fill(0);
    }
    // console.log(a);
    for (let i = 1; i <= p.length; i++) {
        for (let j = 1; j <= c; j++) {
            if (w[i - 1] <= j)
                a[i][j] = Math.max(
                    a[i - 1][j],
                    a[i - 1][j - w[i - 1]] + p[i - 1]
                );
            else a[i][j] = a[i - 1][j];
        }
    }
    // console.log(a);

    let max = a[p.length][c];

    // console.log(max);
    let i = p.length;
    let res = new Array(p.length).fill(0);
    while (max > 0) {
        if (a[i - 1].includes(max)) {
            i--;
        } else {
            res[i - 1] = 1;
            max -= p[i - 1];
            i--;
        }
    }
    console.log(res);
}

let c = 50,
    p = [60, 100, 120],
    w = [10, 20, 30];
knapsackdp(c, p, w);
