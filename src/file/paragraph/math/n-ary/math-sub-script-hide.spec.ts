import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathSubScriptHide } from "./math-sub-script-hide.js";

describe("MathSubScriptHide", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScriptHide with correct root key", () => {
            const mathSubScriptHide = new MathSubScriptHide();

            const tree = new Formatter().format(mathSubScriptHide);
            expect(tree).to.deep.equal({
                "m:subHide": {
                    _attr: {
                        "m:val": 1,
                    },
                },
            });
        });
    });
});
