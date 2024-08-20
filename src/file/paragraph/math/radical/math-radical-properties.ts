// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
import { XmlComponent } from "@file/xml-components/index.js";
import { MathDegreeHide } from "./math-degree-hide.js";

export class MathRadicalProperties extends XmlComponent {
    public constructor(hasDegree: boolean) {
        super("m:radPr");

        if (!hasDegree) {
            this.root.push(new MathDegreeHide());
        }
    }
}
