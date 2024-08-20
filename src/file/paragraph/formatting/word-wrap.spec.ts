import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { WordWrap } from "./word-wrap.js";

describe("WordWrap", () => {
    it("should create", () => {
        const wordWrap = new WordWrap();
        const tree = new Formatter().format(wordWrap);

        expect(tree).to.deep.equal({
            "w:wordWrap": {
                _attr: {
                    "w:val": 0,
                },
            },
        });
    });
});
