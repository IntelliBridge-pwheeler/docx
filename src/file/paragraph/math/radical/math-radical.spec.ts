import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathRadical } from "./math-radical.js";

describe("MathRadical", () => {
    describe("#constructor()", () => {
        it("should create a MathRadical with correct root key", () => {
            const mathRadical = new MathRadical({
                children: [new MathRun("e")],
                degree: [new MathRun("2")],
            });

            const tree = new Formatter().format(mathRadical);
            expect(tree).to.deep.equal({
                "m:rad": [
                    {
                        "m:radPr": {},
                    },
                    {
                        "m:deg": [
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
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["e"],
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
