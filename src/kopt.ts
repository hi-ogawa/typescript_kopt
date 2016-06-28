import _ = require("lodash");

type Matrix = number[][];
type Path = number[];
type Pair = [number, number];

const two = (mtrx: Matrix) : Path => {
    const n = mtrx.length;
    const pairs = swappable_pairs(n);
    let path: Path = _.concat(_.range(n), [0]);
    while (true) {
        let good_pair: Pair;
        for (let k = 0; k < pairs.length; k++) {
            const i = pairs[k][0];
            const j = pairs[k][1];
            if ( mtrx[path[i]][path[j]] + mtrx[path[i + 1]][path[j + 1]] <
                 mtrx[path[i]][path[i + 1]] + mtrx[path[j]][path[j + 1]]
               ) {
                good_pair = [i, j];
                break;
            }
        }
        if (good_pair) {
            path = swap(path, good_pair);
        } else {
            break;
        }
    }
    return path;
};

const swap = (path: Path, pair: Pair) : Path => {
    const i = pair[0];
    const j = pair[1];
    return _.concat(
        path.slice(0, i + 1),
        _.reverse(path.slice(i + 1, j + 1)),
        path.slice(j + 1)
    );
};

const swappable_pairs = (n: number) : Pair[] => {
    const is = _.range(n);
    return _.flatten(
        is.map((i) =>
            is.map((j) : Pair => [i, j]) // https://github.com/Microsoft/TypeScript/issues/2189
               .filter((ij) => ij[1] - ij[0] >= 2)
        )
    );
};

const mkMatrix = <T>(vs: T[], f: ((u: T, v: T) => number)) : Matrix => {
    return vs.map((u) => vs.map((v) => f(u, v)));
};

export = {
    two: two,
    mkMatrix: mkMatrix
};
