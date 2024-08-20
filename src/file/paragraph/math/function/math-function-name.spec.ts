import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathFunctionName } from "./math-function-name.js";

describe("MathFunctionName", () => {
    describe("#constructor()", () => {
        it("should create a MathFunctionName with correct root key", () => {
            const mathFunctionName = new MathFunctionName([new MathRun("2")]);

            const tree = new Formatter().format(mathFunctionName);
            expect(tree).to.deep.equal({
                "m:fName": [
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
