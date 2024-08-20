import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathRoundBrackets } from "./math-round-brackets.js";

describe("MathRoundBrackets", () => {
    describe("#constructor()", () => {
        it("should create a MathRoundBrackets with correct root key", () => {
            const mathRoundBrackets = new MathRoundBrackets({
                children: [new MathRun("60")],
            });

            const tree = new Formatter().format(mathRoundBrackets);
            expect(tree).to.deep.equal({
                "m:d": [
                    {
                        "m:dPr": {},
                    },
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["60"],
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
