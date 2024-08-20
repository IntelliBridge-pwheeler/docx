import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class NonVisualPropertiesAttributes extends XmlAttributeComponent<{
    readonly id?: number;
    readonly name?: string;
    readonly descr?: string;
}> {
    protected readonly xmlKeys = {
        id: "id",
        name: "name",
        descr: "descr",
    };
}
