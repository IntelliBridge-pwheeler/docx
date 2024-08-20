// http://www.datypic.com/sc/ooxml/e-m_sup-3.html
import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";

export class MathSuperScriptElement extends XmlComponent {
    public constructor(children: readonly MathComponent[]) {
        super("m:sup");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
