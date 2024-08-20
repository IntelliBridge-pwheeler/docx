import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathCurlyBrackets } from "./math-curly-brackets.js";

describe("MathCurlyBrackets", () => {
    describe("#constructor()", () => {
        it("should create a MathCurlyBrackets with correct root key", () => {
            const mathCurlyBrackets = new MathCurlyBrackets({
                children: [new MathRun("60")],
            });

            const tree = new Formatter().format(mathCurlyBrackets);
            expect(tree).to.deep.equal({
                "m:d": [
                    {
                        "m:dPr": [
                            {
                                "m:begChr": {
                                    _attr: {
                                        "m:val": "{",
                                    },
                                },
                            },
                            {
                                "m:endChr": {
                                    _attr: {
                                        "m:val": "}",
                                    },
                                },
                            },
                        ],
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
