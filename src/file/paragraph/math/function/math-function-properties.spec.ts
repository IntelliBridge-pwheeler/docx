import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathFunctionProperties } from "./math-function-properties.js";

describe("MathFunctionProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathFunctionProperties with correct root key", () => {
            const mathFunctionProperties = new MathFunctionProperties();

            const tree = new Formatter().format(mathFunctionProperties);
            expect(tree).to.deep.equal({
                "m:funcPr": {},
            });
        });
    });
});
