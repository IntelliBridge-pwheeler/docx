import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathBase } from "./math-base.js";

describe("MathBase", () => {
    describe("#constructor()", () => {
        it("should create a MathBase with correct root key", () => {
            const mathBase = new MathBase([new MathRun("2+2")]);

            const tree = new Formatter().format(mathBase);
            expect(tree).to.deep.equal({
                "m:e": [
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
