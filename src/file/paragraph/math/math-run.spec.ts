import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "./math-run.js";

describe("MathRun", () => {
    describe("#constructor()", () => {
        it("should create a MathRun with correct root key", () => {
            const mathRun = new MathRun("2+2");
            const tree = new Formatter().format(mathRun);
            expect(tree).to.deep.equal({
                "m:r": [
                    {
                        "m:t": ["2+2"],
                    },
                ],
            });
        });
    });
});
