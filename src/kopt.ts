import _ = require('lodash');

type Matrix = number[][];
type Path = number[];

var two = (mtrx : Matrix) : Path => {
    return mtrx[0];
};

var mkMatrix = <T>(vs : T[], f : ((u : T, v : T) => number)) : Matrix => {
    return _.map(vs, (u) => _.map(vs, (v) => f(u, v)));
};

export = {
    two: two,
    mkMatrix: mkMatrix
};