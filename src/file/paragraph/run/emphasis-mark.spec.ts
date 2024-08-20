import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import * as em from "./emphasis-mark.js";

describe("EmphasisMark", () => {
    describe("#constructor()", () => {
        it("should create a new EmphasisMark object with w:em as the rootKey", () => {
            const emphasisMark = new em.EmphasisMark();
            const tree = new Formatter().format(emphasisMark);
            expect(tree).to.deep.equal({
                "w:em": { _attr: { "w:val": "dot" } },
            });
        });
    });
});

describe("DotEmphasisMark", () => {
    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            const emphasisMark = new em.DotEmphasisMark();
            const tree = new Formatter().format(emphasisMark);
            expect(tree).to.deep.equal({
                "w:em": { _attr: { "w:val": "dot" } },
            });
        });
    });
});
