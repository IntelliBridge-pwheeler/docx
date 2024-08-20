import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class PresetGeometryAttributes extends XmlAttributeComponent<{
    readonly prst?: string;
}> {
    protected readonly xmlKeys = {
        prst: "prst",
    };
}
