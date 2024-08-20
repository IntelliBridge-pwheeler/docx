import { XmlComponent } from "@file/xml-components/index.js";

import { MathComponent } from "../math-component.js";

export class MathDenominator extends XmlComponent {
    public constructor(children: readonly MathComponent[]) {
        super("m:den");

        for (const child of children) {
            this.root.push(child);
        }
    }
}
