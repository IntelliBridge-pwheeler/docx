import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathFraction } from "./math-fraction.js";

describe("MathFraction", () => {
    describe("#constructor()", () => {
        it("should create a MathFraction with correct root key", () => {
            const mathFraction = new MathFraction({
                numerator: [new MathRun("2")],
                denominator: [new MathRun("2")],
            });
            const tree = new Formatter().format(mathFraction);
            expect(tree).to.deep.equal({
                "m:f": [
                    {
                        "m:num": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["2"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:den": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["2"],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
