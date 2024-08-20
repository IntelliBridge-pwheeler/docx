// http://www.datypic.com/sc/ooxml/e-m_radPr-1.html
import { XmlComponent } from "@file/xml-components/index.js";

export class MathFunctionProperties extends XmlComponent {
    public constructor() {
        super("m:funcPr");
    }
}
