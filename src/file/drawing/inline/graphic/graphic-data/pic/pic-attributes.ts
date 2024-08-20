import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class PicAttributes extends XmlAttributeComponent<{
    readonly xmlns?: string;
}> {
    protected readonly xmlKeys = {
        xmlns: "xmlns:pic",
    };
}
