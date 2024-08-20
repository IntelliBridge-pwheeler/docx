import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathNumerator } from "./math-numerator.js";

describe("MathNumerator", () => {
    describe("#constructor()", () => {
        it("should create a MathNumerator with correct root key", () => {
            const mathNumerator = new MathNumerator([new MathRun("2+2")]);
            const tree = new Formatter().format(mathNumerator);
            expect(tree).to.deep.equal({
                "m:num": [
                    {
                        "m:r": [
                            {
                                "m:t": ["2+2"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
