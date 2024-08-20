import { XmlComponent } from "@file/xml-components/index.js";

export class MathText extends XmlComponent {
    public constructor(text: string) {
        super("m:t");

        this.root.push(text);
    }
}
