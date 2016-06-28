declare namespace Kopt {
    function two(mtrx: number[][]): number[];
    function mkMatrix<T>(vs: T[], f: ((u: T, v: T) => number)): number[][];
}