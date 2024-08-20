// http://www.datypic.com/sc/ooxml/e-m_dPr-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathBeginningCharacter } from "./math-beginning-character.js";
import { MathEndingCharacter } from "./math-ending-char.js";

export class MathBracketProperties extends XmlComponent {
    public constructor(options?: { readonly beginningCharacter: string; readonly endingCharacter: string }) {
        super("m:dPr");

        if (!!options) {
            this.root.push(new MathBeginningCharacter(options.beginningCharacter));
            this.root.push(new MathEndingCharacter(options.endingCharacter));
        }
    }
}
