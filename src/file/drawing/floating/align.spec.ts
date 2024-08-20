import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";
import { VerticalPositionAlign } from "@file/shared/alignment.js";

import { Align } from "./align.js";

describe("Align", () => {
    describe("#constructor()", () => {
        it("should create a element with correct root key", () => {
            const tree = new Formatter().format(new Align(VerticalPositionAlign.CENTER));
            expect(tree).to.deep.equal({
                "wp:align": ["center"],
            });
        });
    });
});
