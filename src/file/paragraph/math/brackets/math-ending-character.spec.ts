import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { MathEndingCharacter } from "./math-ending-char.js";

describe("MathEndingCharacter", () => {
    describe("#constructor()", () => {
        it("should create a MathEndingCharacter with correct root key", () => {
            const mathEndingCharacter = new MathEndingCharacter("]");

            const tree = new Formatter().format(mathEndingCharacter);
            expect(tree).to.deep.equal({
                "m:endChr": {
                    _attr: {
                        "m:val": "]",
                    },
                },
            });
        });
    });
});
