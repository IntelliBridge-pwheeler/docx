import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";
import { MathSuperScriptProperties } from "./math-super-script-function-properties.js";

describe("MathSuperScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScriptProperties with correct root key", () => {
            const mathSuperScriptProperties = new MathSuperScriptProperties();

            const tree = new Formatter().format(mathSuperScriptProperties);
            expect(tree).to.deep.equal({
                "m:sSupPr": {},
            });
        });
    });
});
