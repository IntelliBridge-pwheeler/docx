import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { createSolidFill } from "./solid-fill.js";
import { SchemeColor } from "./scheme-color.js";

describe("createSolidFill", () => {
    it("should create of rgb", () => {
        const tree = new Formatter().format(createSolidFill({ type: "rgb", value: "FFFFFF" }));
        expect(tree).to.deep.equal({
            "a:solidFill": [
                {
                    "a:srgbClr": {
                        _attr: {
                            val: "FFFFFF",
                        },
                    },
                },
            ],
        });
    });

    it("should create of scheme", () => {
        const tree = new Formatter().format(createSolidFill({ type: "scheme", value: SchemeColor.TX1 }));
        expect(tree).to.deep.equal({
            "a:solidFill": [
                {
                    "a:schemeClr": {
                        _attr: {
                            val: "tx1",
                        },
                    },
                },
            ],
        });
    });
});
