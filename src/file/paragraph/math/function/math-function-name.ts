// http://www.datypic.com/sc/ooxml/e-m_fName-1.html
import { XmlComponent } from "@file/xml-components/index.js";
import { MathComponent } from "../math-component.js";

export class MathFunctionName extends XmlComponent {
    public constructor(children: readonly MathComponent[]) {
        super("m:fName");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
