import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathText } from "./math-text.js";

describe("MathText", () => {
    describe("#constructor()", () => {
        it("should create a MathText with correct root key", () => {
            const mathText = new MathText("2+2");
            const tree = new Formatter().format(mathText);
            expect(tree).to.deep.equal({
                "m:t": ["2+2"],
            });
        });
    });
});
