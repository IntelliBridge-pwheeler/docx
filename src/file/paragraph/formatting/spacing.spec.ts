import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { Spacing } from "./spacing.js";

describe("Spacing", () => {
    describe("#constructor", () => {
        it("should set the properties given", () => {
            const spacing = new Spacing({ before: 100, after: 120, line: 150 });
            const tree = new Formatter().format(spacing);
            expect(tree).to.deep.equal({
                "w:spacing": { _attr: { "w:after": 120, "w:before": 100, "w:line": 150 } },
            });
        });

        it("should only set the given properties", () => {
            const spacing = new Spacing({ before: 100 });
            const tree = new Formatter().format(spacing);
            expect(tree).to.deep.equal({
                "w:spacing": { _attr: { "w:before": 100 } },
            });
        });
    });
});
