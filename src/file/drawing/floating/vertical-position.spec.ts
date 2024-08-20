import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";
import { VerticalPositionAlign } from "@file/shared/alignment.js";

import { VerticalPositionRelativeFrom } from "./floating-position.js";
import { VerticalPosition } from "./vertical-position.js";

describe("VerticalPosition", () => {
    describe("#constructor()", () => {
        it("should create a element with position align", () => {
            const tree = new Formatter().format(
                new VerticalPosition({
                    relative: VerticalPositionRelativeFrom.MARGIN,
                    align: VerticalPositionAlign.INSIDE,
                }),
            );
            expect(tree).to.deep.equal({
                "wp:positionV": [
                    {
                        _attr: {
                            relativeFrom: "margin",
                        },
                    },
                    {
                        "wp:align": ["inside"],
                    },
                ],
            });
        });

        it("should create a element with offset", () => {
            const tree = new Formatter().format(
                new VerticalPosition({
                    relative: VerticalPositionRelativeFrom.MARGIN,
                    offset: 40,
                }),
            );
            expect(tree).to.deep.equal({
                "wp:positionV": [
                    {
                        _attr: {
                            relativeFrom: "margin",
                        },
                    },
                    {
                        "wp:posOffset": ["40"],
                    },
                ],
            });
        });

        it("should require one of align or offset", () => {
            expect(() => new VerticalPosition({})).to.throw();
        });
    });
});
