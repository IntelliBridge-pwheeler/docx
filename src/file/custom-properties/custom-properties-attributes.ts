import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class CustomPropertiesAttributes extends XmlAttributeComponent<{
    readonly xmlns: string;
    readonly vt: string;
}> {
    protected readonly xmlKeys = {
        xmlns: "xmlns",
        vt: "xmlns:vt",
    };
}
