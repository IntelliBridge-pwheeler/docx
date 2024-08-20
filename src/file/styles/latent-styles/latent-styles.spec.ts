import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { LatentStyleException } from "./exceptions.js";
import { LatentStyles } from "./latent-styles.js";

describe("LatentStyles", () => {
    describe("#constructor()", () => {
        it("should create", () => {
            const currentLatentStyles = new LatentStyles();

            const tree = new Formatter().format(currentLatentStyles);
            expect(tree).to.deep.equal({
                "w:latentStyles": {},
            });
        });

        it("should create with exception", () => {
            const currentLatentStyles = new LatentStyles(new LatentStyleException({}));

            const tree = new Formatter().format(currentLatentStyles);
            expect(tree).to.deep.equal({
                "w:latentStyles": [
                    {
                        "w:lsdException": {
                            _attr: {},
                        },
                    },
                ],
            });
        });
    });
});
