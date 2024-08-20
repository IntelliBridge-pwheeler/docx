import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathSubScriptElement } from "./math-sub-script.js";

describe("MathSubScriptElement", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScriptElement with correct root key", () => {
            const mathSubScriptElement = new MathSubScriptElement([new MathRun("2+2")]);

            const tree = new Formatter().format(mathSubScriptElement);
            expect(tree).to.deep.equal({
                "m:sub": [
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
