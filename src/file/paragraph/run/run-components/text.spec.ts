import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";
import { SpaceType } from "@file/shared/index.js";

import { Text } from "./text.js";

describe("Text", () => {
    describe("#constructor", () => {
        it("adds the passed in text to the component", () => {
            const t = new Text(" this is\n text");
            const f = new Formatter().format(t);
            expect(f).to.deep.equal({
                "w:t": [{ _attr: { "xml:space": "preserve" } }, " this is\n text"],
            });
        });

        it("adds the passed in text to the component with options", () => {
            const t = new Text({
                text: " this is\n text",
                space: SpaceType.PRESERVE,
            });
            const f = new Formatter().format(t);
            expect(f).to.deep.equal({
                "w:t": [{ _attr: { "xml:space": "preserve" } }, " this is\n text"],
            });
        });

        it("adds the passed in text to the component with options and sets default space type", () => {
            const t = new Text({
                text: " this is\n text",
            });
            const f = new Formatter().format(t);
            expect(f).to.deep.equal({
                "w:t": [{ _attr: { "xml:space": "default" } }, " this is\n text"],
            });
        });
    });
});
