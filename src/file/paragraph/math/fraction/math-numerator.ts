import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";

export class MathNumerator extends XmlComponent {
    public constructor(children: readonly MathComponent[]) {
        super("m:num");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
