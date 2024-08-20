import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathLimitLower } from "./math-limit-lower.js";

describe("MathLimitLower", () => {
    describe("#constructor()", () => {
        it("should create a MathLimitLower with correct root key", () => {
            const mathLimitLower = new MathLimitLower({
                children: [new MathRun("lim")],
                limit: [new MathRun("x→0")],
            });

            const tree = new Formatter().format(mathLimitLower);
            expect(tree).to.deep.equal({
                "m:limLow": [
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["lim"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:lim": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["x→0"],
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
