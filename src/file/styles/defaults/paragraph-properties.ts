import { IParagraphStylePropertiesOptions, ParagraphProperties } from "@file/paragraph/properties.js";
import { XmlComponent } from "@file/xml-components/index.js";

export class ParagraphPropertiesDefaults extends XmlComponent {
    public constructor(options?: IParagraphStylePropertiesOptions) {
        super("w:pPrDefault");
        this.root.push(new ParagraphProperties(options));
    }
}
