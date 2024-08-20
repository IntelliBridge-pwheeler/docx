import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class OverrideAttributes extends XmlAttributeComponent<{
    readonly contentType: string;
    readonly partName?: string;
}> {
    protected readonly xmlKeys = {
        contentType: "ContentType",
        partName: "PartName",
    };
}
