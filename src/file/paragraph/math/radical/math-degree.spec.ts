import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathDegree } from "./math-degree.js";

describe("MathDegree", () => {
    describe("#constructor()", () => {
        it("should create a MathDegree with correct root key", () => {
            const mathDegree = new MathDegree();

            const tree = new Formatter().format(mathDegree);
            expect(tree).to.deep.equal({
                "m:deg": {},
            });
        });

        it("should create a MathDegree with correct root key with child", () => {
            const mathDegree = new MathDegree([new MathRun("2")]);

            const tree = new Formatter().format(mathDegree);
            expect(tree).to.deep.equal({
                "m:deg": [
                    {
                        "m:r": [
                            {
                                "m:t": ["2"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
