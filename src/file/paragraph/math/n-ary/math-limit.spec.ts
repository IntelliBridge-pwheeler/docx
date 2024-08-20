import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathLimit } from "./math-limit.js";

describe("MathLimit", () => {
    describe("#constructor()", () => {
        it("should create a MathLimit with correct root key", () => {
            const mathLimit = new MathLimit([new MathRun("x→0")]);

            const tree = new Formatter().format(mathLimit);
            expect(tree).to.deep.equal({
                "m:lim": [
                    {
                        "m:r": [
                            {
                                "m:t": ["x→0"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
