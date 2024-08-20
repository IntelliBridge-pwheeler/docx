import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { DeletedText } from "./deleted-text.js";

describe("Deleted Text", () => {
    describe("#constructor", () => {
        it("adds the passed in text to the component", () => {
            const t = new DeletedText(" this is\n text");
            const f = new Formatter().format(t);
            expect(f).to.deep.equal({
                "w:delText": [{ _attr: { "xml:space": "preserve" } }, " this is\n text"],
            });
        });
    });
});
