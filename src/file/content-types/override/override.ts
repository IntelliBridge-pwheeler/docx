import { XmlComponent } from "@file/xml-components/index.js";
import { OverrideAttributes } from "./override-attributes.js";

export class Override extends XmlComponent {
    public constructor(contentType: string, partName?: string) {
        super("Override");

        this.root.push(
            new OverrideAttributes({
                contentType: contentType,
                partName: partName,
            }),
        );
    }
}
