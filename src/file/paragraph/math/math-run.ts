// http://www.datypic.com/sc/ooxml/e-m_r-1.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathText } from "./math-text.js";

export class MathRun extends XmlComponent {
    public constructor(text: string) {
        super("m:r");

        this.root.push(new MathText(text));
    }
}
