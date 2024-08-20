// http://officeopenxml.com/drwSp-size.php
import { XmlComponent } from "@file/xml-components/index.js";
import { OffsetAttributes } from "./off-attributes.js";

export class Offset extends XmlComponent {
    public constructor() {
        super("a:off");

        this.root.push(
            new OffsetAttributes({
                x: 0,
                y: 0,
            }),
        );
    }
}
