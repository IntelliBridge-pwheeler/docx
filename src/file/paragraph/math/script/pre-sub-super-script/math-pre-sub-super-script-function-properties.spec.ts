import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";
import { MathPreSubSuperScriptProperties } from "./math-pre-sub-super-script-function-properties.js";

describe("MathPreSubSuperScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathPreSubSuperScriptProperties with correct root key", () => {
            const mathPreSubSuperScriptProperties = new MathPreSubSuperScriptProperties();

            const tree = new Formatter().format(mathPreSubSuperScriptProperties);
            expect(tree).to.deep.equal({
                "m:sPrePr": {},
            });
        });
    });
});
