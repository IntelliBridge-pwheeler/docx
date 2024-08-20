import { XmlComponent } from "@file/xml-components/index.js";
import { DefaultAttributes } from "./default-attributes.js";

export class Default extends XmlComponent {
    public constructor(contentType: string, extension?: string) {
        super("Default");

        this.root.push(
            new DefaultAttributes({
                contentType: contentType,
                extension: extension,
            }),
        );
    }
}
