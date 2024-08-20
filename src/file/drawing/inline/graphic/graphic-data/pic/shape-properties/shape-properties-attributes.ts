import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class ShapePropertiesAttributes extends XmlAttributeComponent<{
    readonly bwMode?: string;
}> {
    protected readonly xmlKeys = {
        bwMode: "bwMode",
    };
}
