"use strict";
var _ = require("lodash");
var two = function (mtrx) {
    var n = mtrx.length;
    var pairs = swappable_pairs(n);
    var path = _.concat(_.range(n), [0]);
    while (true) {
        var good_pair = void 0;
        for (var k = 0; k < pairs.length; k++) {
            var i = pairs[k][0];
            var j = pairs[k][1];
            if (mtrx[path[i]][path[j]] + mtrx[path[i + 1]][path[j + 1]] <
                mtrx[path[i]][path[i + 1]] + mtrx[path[j]][path[j + 1]]) {
                good_pair = [i, j];
                break;
            }
        }
        if (good_pair) {
            path = swap(path, good_pair);
        }
        else {
            break;
        }
    }
    return path;
};
var swap = function (path, pair) {
    var i = pair[0];
    var j = pair[1];
    return _.concat(path.slice(0, i + 1), _.reverse(path.slice(i + 1, j + 1)), path.slice(j + 1));
};
var swappable_pairs = function (n) {
    var is = _.range(n);
    return _.flatten(is.map(function (i) {
        return is.map(function (j) { return [i, j]; }) // https://github.com/Microsoft/TypeScript/issues/2189
            .filter(function (ij) { return ij[1] - ij[0] >= 2; });
    }));
};
var mkMatrix = function (vs, f) {
    return vs.map(function (u) { return vs.map(function (v) { return f(u, v); }); });
};
module.exports = {
    two: two,
    mkMatrix: mkMatrix
};
//# sourceMappingURL=kopt.js.map