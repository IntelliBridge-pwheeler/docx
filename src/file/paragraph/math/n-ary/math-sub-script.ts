// http://www.datypic.com/sc/ooxml/e-m_sub-3.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";

export class MathSubScriptElement extends XmlComponent {
    public constructor(children: readonly MathComponent[]) {
        super("m:sub");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
