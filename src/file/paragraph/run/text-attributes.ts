import { SpaceType } from "@file/shared/index.js";
import { XmlAttributeComponent } from "@file/xml-components/index.js";

export class TextAttributes extends XmlAttributeComponent<{
    readonly space: (typeof SpaceType)[keyof typeof SpaceType];
}> {
    protected readonly xmlKeys = { space: "xml:space" };
}
