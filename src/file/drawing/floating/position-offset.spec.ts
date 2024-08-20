import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { PositionOffset } from "./position-offset.js";

describe("PositionOffset", () => {
    describe("#constructor()", () => {
        it("should create a element with correct root key", () => {
            const tree = new Formatter().format(new PositionOffset(50));
            expect(tree).to.deep.equal({
                "wp:posOffset": ["50"],
            });
        });
    });
});
