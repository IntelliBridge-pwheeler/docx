import { SpaceType } from "@file/shared/index.js";
import { XmlComponent } from "@file/xml-components/index.js";

import { TextAttributes } from "../run/text-attributes.js";
import { IPageReferenceOptions } from "./pageref.js";

export class PageReferenceFieldInstruction extends XmlComponent {
    public constructor(bookmarkId: string, options: IPageReferenceOptions = {}) {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));

        let instruction = `PAGEREF ${bookmarkId}`;

        if (options.hyperlink) {
            instruction = `${instruction} \\h`;
        }
        if (options.useRelativePosition) {
            instruction = `${instruction} \\p`;
        }

        this.root.push(instruction);
    }
}
