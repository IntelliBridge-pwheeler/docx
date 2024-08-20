import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathFunction } from "./math-function.js";

describe("MathFunction", () => {
    describe("#constructor()", () => {
        it("should create a MathFunction with correct root key", () => {
            const mathFunction = new MathFunction({
                name: [new MathRun("sin")],
                children: [new MathRun("60")],
            });

            const tree = new Formatter().format(mathFunction);
            expect(tree).to.deep.equal({
                "m:func": [
                    {
                        "m:funcPr": {},
                    },
                    {
                        "m:fName": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["sin"],
                                    },
                                ],
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
