import { describe, expect, it } from "vitest";

import { Document } from "./index.js";

describe("Index", () => {
    describe("Document", () => {
        it("should instantiate the Document", () => {
            expect(
                new Document({
                    sections: [],
                }),
            ).to.be.ok;
        });
    });
});
