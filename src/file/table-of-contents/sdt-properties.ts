// http://www.datypic.com/sc/ooxml/e-w_sdtPr-1.html
import { StringValueElement, XmlComponent } from "@file/xml-components/index.js";

export class StructuredDocumentTagProperties extends XmlComponent {
    public constructor(alias?: string) {
        super("w:sdtPr");

        if (alias) {
            this.root.push(new StringValueElement("w:alias", alias));
        }
    }
}
