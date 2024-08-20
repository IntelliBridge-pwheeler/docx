import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathLimitLocation } from "./math-limit-location.js";

describe("MathLimitLocation", () => {
    describe("#constructor()", () => {
        it("should create a MathLimitLocation with correct root key", () => {
            const mathLimitLocation = new MathLimitLocation();

            const tree = new Formatter().format(mathLimitLocation);
            expect(tree).to.deep.equal({
                "m:limLoc": {
                    _attr: {
                        "m:val": "undOvr",
                    },
                },
            });
        });
    });
});
