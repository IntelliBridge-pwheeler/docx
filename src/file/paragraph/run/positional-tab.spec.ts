import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter.js";

import { PositionalTab, PositionalTabAlignment, PositionalTabLeader, PositionalTabRelativeTo } from "./positional-tab.js";

describe("PositionalTab", () => {
    it("should create a PositionalTab with correct root key", () => {
        const tree = new Formatter().format(
            new PositionalTab({
                alignment: PositionalTabAlignment.CENTER,
                relativeTo: PositionalTabRelativeTo.MARGIN,
                leader: PositionalTabLeader.DOT,
            }),
        );

        expect(tree).to.deep.equal({
            "w:ptab": {
                _attr: {
                    "w:alignment": "center",
                    "w:relativeTo": "margin",
                    "w:leader": "dot",
                },
            },
        });
    });
});
