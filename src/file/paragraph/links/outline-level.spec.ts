import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { OutlineLevel } from "./outline-level.js";

describe("ParagraphOutlineLevel", () => {
    let outlineLevel: OutlineLevel;

    describe("#constructor()", () => {
        it("should create an outlineLevel with given value", () => {
            outlineLevel = new OutlineLevel(0);
            const tree = new Formatter().format(outlineLevel);
            expect(tree).to.deep.equal({
                "w:outlineLvl": {
                    _attr: {
                        "w:val": 0,
                    },
                },
            });
        });
    });
});
