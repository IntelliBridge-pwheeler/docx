import { TextAttributes } from "@file/paragraph/run/text-attributes.js";
import { SpaceType } from "@file/shared/index.js";
import { XmlComponent } from "@file/xml-components/index.js";

export class DeletedText extends XmlComponent {
    public constructor(text: string) {
        super("w:delText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));

        this.root.push(text);
    }
}
