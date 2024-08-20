// http://www.datypic.com/sc/ooxml/e-m_sSubPr-1.html
import { XmlComponent } from "@file/xml-components/index.js";

export class MathSubScriptProperties extends XmlComponent {
    public constructor() {
        super("m:sSubPr");
    }
}
