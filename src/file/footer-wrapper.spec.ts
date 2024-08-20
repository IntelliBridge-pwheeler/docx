import { describe, expect, it, vi } from "vitest";

import { FooterWrapper } from "./footer-wrapper.js";
import { Media } from "./media/index.js";
import { Paragraph } from "./paragraph/index.js";
import { Table, TableCell, TableRow } from "./table/index.js";

describe("FooterWrapper", () => {
    describe("#add", () => {
        it("should call the underlying footer's addParagraph", () => {
            const file = new FooterWrapper(new Media(), 1);
            const spy = vi.spyOn(file.View, "add");
            file.add(new Paragraph({}));

            expect(spy).toBeCalled();
        });

        it("should call the underlying footer's addParagraph", () => {
            const file = new FooterWrapper(new Media(), 1);
            const spy = vi.spyOn(file.View, "add");
            file.add(
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("hello")],
                                }),
                            ],
                        }),
                    ],
                }),
            );

            expect(spy).toBeCalled();
        });
    });

    describe("#addChildElement", () => {
        it("should call the underlying footer's addChildElement", () => {
            const file = new FooterWrapper(new Media(), 1);
            const spy = vi.spyOn(file.View, "addChildElement");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            file.addChildElement({} as any);

            expect(spy).toBeCalled();
        });
    });

    describe("#Media", () => {
        it("should get Media", () => {
            const media = new Media();
            const file = new FooterWrapper(media, 1);
            expect(file.Media).to.equal(media);
        });
    });
});
