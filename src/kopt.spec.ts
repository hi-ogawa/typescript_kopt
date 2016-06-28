import Kopt = require("./kopt");
import Chai = require("chai");
const expect = Chai.expect;

describe("Kopt", () => {
    type Point = [number, number];
    let vs: Point[];
    vs = [ [0, 0]
         , [1, 4]
         , [2, 2]
         , [3, 2]
         , [3, 4]
         , [6, 0]
         , [7, 3]
         , [8, 4]
         , [9, 0]
         ];
    let f: (u: Point, v: Point) => number;
    f = (u, v) => Math.sqrt(Math.pow(u[0] - v[0], 2) + Math.pow(u[1] - v[1], 2));

    describe("two", () => {
        it("", () => {
            expect(Kopt.two(Kopt.mkMatrix(vs, f))).to.deep.equal(
                [ 0, 1, 4, 6, 7, 8, 5, 3, 2, 0 ]
            );
        });
    });
    describe("mkMatrix", () => {
        it("", () => {
            expect(Kopt.mkMatrix(vs, f).length).to.equal(9);
        });
    });
});
