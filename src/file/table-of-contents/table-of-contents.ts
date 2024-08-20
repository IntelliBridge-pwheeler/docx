// http://officeopenxml.com/WPtableOfContents.php
// http://www.datypic.com/sc/ooxml/e-w_sdt-1.html
import { Paragraph } from "@file/paragraph/index.js";
import { Run } from "@file/paragraph/run/index.js";
import { Begin, End, Separate } from "@file/paragraph/run/field.js";
import { FileChild } from "@file/file-child.js";
import { FieldInstruction } from "./field-instruction.js";
import { StructuredDocumentTagContent } from "./sdt-content.js";
import { StructuredDocumentTagProperties } from "./sdt-properties.js";
import { ITableOfContentsOptions } from "./table-of-contents-properties.js";

export class TableOfContents extends FileChild {
    public constructor(alias: string = "Table of Contents", properties?: ITableOfContentsOptions) {
        super("w:sdt");
        this.root.push(new StructuredDocumentTagProperties(alias));

        const content = new StructuredDocumentTagContent();

        const beginParagraph = new Paragraph({
            children: [
                new Run({
                    children: [new Begin(true), new FieldInstruction(properties), new Separate()],
                }),
            ],
        });

        content.addChildElement(beginParagraph);

        const endParagraph = new Paragraph({
            children: [
                new Run({
                    children: [new End()],
                }),
            ],
        });

        content.addChildElement(endParagraph);

        this.root.push(content);
    }
}
