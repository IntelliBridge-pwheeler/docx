import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class DefaultAttributes extends XmlAttributeComponent<{
    readonly contentType: string;
    readonly extension?: string;
}> {
    protected readonly xmlKeys = {
        contentType: "ContentType",
        extension: "Extension",
    };
}
