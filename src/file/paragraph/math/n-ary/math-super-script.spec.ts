import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathRun } from "../math-run.js";
import { MathSuperScriptElement } from "./math-super-script.js";

describe("MathSuperScriptElement", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScriptElement with correct root key", () => {
            const mathSuperScriptElement = new MathSuperScriptElement([new MathRun("2+2")]);

            const tree = new Formatter().format(mathSuperScriptElement);
            expect(tree).to.deep.equal({
                "m:sup": [
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
