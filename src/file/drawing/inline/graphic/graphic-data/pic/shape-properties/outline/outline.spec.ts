import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { createOutline } from "./outline.js";
import { SchemeColor } from "./scheme-color.js";

describe("createOutline", () => {
    it("should create no fill", () => {
        const tree = new Formatter().format(createOutline({ type: "noFill" }));
        expect(tree).to.deep.equal({
            "a:ln": [
                {
                    _attr: {},
                },
                {
                    "a:noFill": {},
                },
            ],
        });
    });

    it("should create solid rgb fill", () => {
        const tree = new Formatter().format(createOutline({ type: "solidFill", solidFillType: "rgb", value: "FFFFFF" }));
        expect(tree).to.deep.equal({
            "a:ln": [
                {
                    _attr: {},
                },
                {
                    "a:solidFill": [
                        {
                            "a:srgbClr": {
                                _attr: {
                                    val: "FFFFFF",
                                },
                            },
                        },
                    ],
                },
            ],
        });
    });

    it("should create solid scheme fill", () => {
        const tree = new Formatter().format(createOutline({ type: "solidFill", solidFillType: "scheme", value: SchemeColor.ACCENT1 }));
        expect(tree).to.deep.equal({
            "a:ln": [
                {
                    _attr: {},
                },
                {
                    "a:solidFill": [
                        {
                            "a:schemeClr": {
                                _attr: {
                                    val: "accent1",
                                },
                            },
                        },
                    ],
                },
            ],
        });
    });
});
