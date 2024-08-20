// http://officeopenxml.com/WPfieldInstructions.php
import { SpaceType } from "@file/shared/index.js";
import { XmlComponent } from "@file/xml-components/index.js";

import { TextAttributes } from "./text-attributes.js";

export class SequentialIdentifierInstruction extends XmlComponent {
    public constructor(identifier: string) {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push(`SEQ ${identifier}`);
    }
}
