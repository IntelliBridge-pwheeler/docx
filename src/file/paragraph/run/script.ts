import { Attributes, XmlComponent } from "@file/xml-components/index.js";

export abstract class VerticalAlign extends XmlComponent {
    public constructor(type: string) {
        super("w:vertAlign");
        this.root.push(
            new Attributes({
                val: type,
            }),
        );
    }
}

export class SuperScript extends VerticalAlign {
    public constructor() {
        super("superscript");
    }
}

export class SubScript extends VerticalAlign {
    public constructor() {
        super("subscript");
    }
}
